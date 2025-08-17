import React, { useEffect, useState } from 'react';

function ProblemWindow({ menuContent, setShowMenu, showMenu, setMenuContent, problemIndex }) {
    const [submitted, setSubmitted] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');;
    useEffect(() => {
        setUserAnswer('');
        setSubmitted(false);
    }, [problemIndex]);
    return (
        <div className={showMenu ? "ProblemWindowContainer" : "hide"} onClick={() => setShowMenu(false)}>
            <div className="ProblemWindow" onClick={(e) => e.stopPropagation()}>
                <div className='closeButton' onClick={() => setShowMenu(false)}></div>
                <div className='ProblemContent'>
                    <p>{menuContent[problemIndex][0]}</p>
                    {menuContent[problemIndex][2] && (
                        <img src={menuContent[problemIndex][2]} alt="Problem" className="ProblemImage" />
                    )}
                    <input
                        type="text"
                        placeholder="Your answer here"
                        className="AnswerInput"
                        value={userAnswer}
                        onChange={(e) => {setUserAnswer(e.target.value); setSubmitted(false);}}
                    />
                    {userAnswer === String(menuContent[problemIndex][1]) ? 
                        <p className={submitted ? "CorrectAnswer" : "hide"}>Correct!</p> : 
                        <p className={submitted ? "WrongAnswer" : "hide"}>Wrong answer, try again!</p>
                    }
                    <button className="SubmitButton" onClick={() => {setSubmitted(true)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ProblemWindow;