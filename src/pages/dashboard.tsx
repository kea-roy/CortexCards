import React, { useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard';
import {Link} from 'react-router-dom';
import { DocumentData, doc, onSnapshot, getFirestore, updateDoc, arrayUnion } from 'firebase/firestore';
import firebase from 'firebase/compat/app';

type Props = {
    user: firebase.User | null;
    setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
};

const Dashboard = ({user, setUser}: Props) => {
    const db = getFirestore();
    const [flashcards, setFlashcards] = useState<DocumentData[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [formFrontText, setFormFrontText] = useState("");
    const [formBackText, setFormBackText] = useState("");
    const [error, setError] = useState(null);
    const [singleMode, setSingleMode] = useState(false);
    const [curIndex, setCurIndex] = useState(0);
    useEffect(() => {
        if(user != null){
            const docRef = doc(db, "users", user.uid);
            const unsubscribe = onSnapshot(docRef, (snapshot) => {
                const data = snapshot.data();
                if(data){
                    const flashcards = data.flashcards;
                    if(flashcards){
                        setFlashcards(flashcards);
                    }
                }
            });
            return () => unsubscribe();
        }
        else{
            setFlashcards([]);
        }
        return () => {};
    }, [db, user]);
    
    function handleAddFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const flashcardToAdd = { "frontText":formFrontText, "backText":formBackText };
        if (user) {
            const docRef = doc(db, "users", user.uid);
            updateDoc(docRef, { flashcards: arrayUnion(flashcardToAdd)});
        }
        setShowForm(false);
    }
    return (
        <div>
            <header className='bodyHeader'>
                {flashcards.length > 1 && <button className={'toggleButton'} onClick={()=>setSingleMode(!singleMode)}>{singleMode? "View All Flashcards": "View One Only"}</button>}
                {user && <button className={'toggleButton'} onClick={()=>setShowForm(!showForm)}>Add Flashcard</button>}
            </header>
            <div className={"flashcard-container"}>
                {flashcards && 
                    (
                        singleMode?
                            <div>
                                <div className={'singleMode-container'}>
                                    <button className={'prevButton'} onClick={()=>setCurIndex((curIndex-1+flashcards.length)%flashcards.length)} />
                                    <Flashcard frontText={flashcards[curIndex].frontText} backText={flashcards[curIndex].backText} />
                                    <button className={'nextButton'} onClick={()=>setCurIndex((curIndex+1)%flashcards.length)} /> 
                                </div>
                                <div>{curIndex+1 + "/" + flashcards.length}</div>
                            </div>
                        : 
                            flashcards.map((flashcard, index) => (
                                <Flashcard key={index} frontText={flashcard.frontText} backText={flashcard.backText} />
                            ))
                    )
                }
                {user && flashcards && flashcards.length===0 && <p>You haven't made any flashcards yet.</p>}
            </div>
            {!user && <button className="toggleButton"><Link to="/">Sign in to add flashcards</Link></button>}
            {showForm && 
                <div className="modal">
                    <div className="form-container">
                        <button className="closeButton" onClick={()=>setShowForm(false)}></button>
                        <form className={"add-form"}onSubmit={handleAddFormSubmit}>
                            <label>
                                Front: 
                                <input 
                                    type="text"
                                    value={formFrontText}
                                    onChange={(e) => {setFormFrontText(e.target.value); setError(null);}}
                                    placeholder="Front Text"
                                />
                            </label>
                            <label>
                                Back:
                                <input 
                                    type="text"
                                    value={formBackText}
                                    onChange={(e) => {setFormBackText(e.target.value); setError(null);}}
                                    placeholder="Back Text"
                                />
                            </label>
                            <button type="submit">Add Flashcard</button>
                        </form>
                    {error && <p>{error}</p>}
                </div>
            </div>}
        </div>
    );
};

export default Dashboard;