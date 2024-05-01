import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, doc, setDoc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import logo from '../images/cortexcardslogo-transparent.png';

type Props = {
  user: firebase.User | null;
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
};


const WelcomePage = ({user, setUser}:Props) => {
  return (
    <div>
      <h1 className={"welcome-msg"}>
        <img src={logo} alt={"CortexCardsLogo"} className="logo"></img>
        Welcome to Cortex Cards
      </h1>
      <div className={'welcome-text'}>
        <p>Create Flashcards and Learn</p>
      </div>
      <div className={'signUpForm-container'}>

      <p>Sign up to start creating flashcards</p>
        <SignUpForm user={user} setUser={setUser}/>
      </div>
    </div>
  );
}

function SignUpForm({user, setUser}:Props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isCreateAccount, setIsCreateAccount] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      const unsubscribe = getAuth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user as firebase.User);
          navigate("/dashboard");
        } else {
          setUser(null);
        }
      });
      return () => unsubscribe();
    }, []);
    const handleSubmit = (e) => {
      console.log(e);
      e.preventDefault();
      // Sign up user with email and password
      const auth = getAuth();
      if(isCreateAccount){
        console.log("Create account");
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          setUser(user as firebase.User);
          setError(null);
          // Create user document in firestore
          const db = getFirestore();
          const usersRef = collection(db,"users");
          await setDoc(doc(usersRef,user.uid),{
            flashcards: [],
            name: user.email,
          });
          // Redirect to dashboard page
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
      }
      else{
        console.log("Login with account");
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          setUser(user as firebase.User);
          setError(null);
          // Redirect to dashboard page
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className={'add-form'}>
        <input
          type="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value); setError(null);}}
          placeholder="Email"
          autoComplete='email'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value); setError(null);}}
          placeholder="Password"
        />
        <div className={'button-container'}>
          <button type="submit" onClick={()=>{setIsCreateAccount(true)}}>Create Account</button>
          <button type="submit" onClick={()=>{setIsCreateAccount(false)}}>Login</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    );
  
  }

export default WelcomePage;