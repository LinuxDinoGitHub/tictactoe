import React, { useEffect, useRef, useState } from 'react';

function ProblemWindow({ menuContent, setShowMenu, showMenu, setMenuContent, problemIndex , userID }) {
    const [submitted, setSubmitted] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const newContent = useRef(menuContent);
    console.log(newContent.current);
    useEffect(() => {
        setUserAnswer('');
        setSubmitted(false);
    }, [problemIndex]);
    function correctAnswer() {
        newContent.current[problemIndex].push(userID);
        setMenuContent(newContent);
        setTimeout(() => {
            setShowMenu(false);
        }, 1000);
    }
    return (
        <div className={showMenu ? "ProblemWindowContainer" : "hide"} onClick={() => setShowMenu(false)}>
{/* Implement feature to show box has been taken */}
            <div className="ProblemWindow" onClick={(e) => e.stopPropagation()}>
                {/* <div className={}></div> */}
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
                    {userAnswer === String(menuContent[problemIndex][1]) && submitted ? correctAnswer(): null}
                    <button className="SubmitButton" onClick={() => {setSubmitted(true)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default ProblemWindow;