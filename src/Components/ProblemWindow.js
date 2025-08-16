import React from 'react';

function ProblemWindow({ menuContent , setShowMenu , showMenu }) {
    return (
        <div className={showMenu ? "ProblemWindowContainer" : "hide"}>
            <div className="ProblemWindow">
                <div className='closeButton' 
                onClick={() => setShowMenu(false)}></div>
                <div className='ProblemContent'>
                    <p>{menuContent[0]}</p>
                    {menuContent[2] ? <img src={menuContent[2]} alt="Problem" className="ProblemImage" /> : null};
                    <input type="text" placeholder="Your answer here" className="AnswerInput" />
                    <button className="SubmitButton">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ProblemWindow;