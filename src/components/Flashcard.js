import React, { useState, useEffect } from 'react';

const Flashcard = ({ frontText, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [playAnimation, setPlayAnimation] = useState(false);
    useEffect(()=>{
        setIsFlipped(false);
        setPlayAnimation(false);
        setTimeout(() => {
            setPlayAnimation(true);
        }, 100);
    },[frontText, backText]);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={"flashcard" + (isFlipped ? ' flipped' : '')} onClick={handleCardClick}>
            <div className={"flashcard-inner" + (playAnimation? ' playAnimation': '')}>
                    <div className="flashcard-front">{frontText}</div>
                    <div className="flashcard-back">{backText}</div>
            </div>
        </div>
    );
};

export default Flashcard;