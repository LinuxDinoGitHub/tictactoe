import React from 'react';
import GridBox from './GridBox.js';
function Grid({ content, setShowMenu , setProblemIndex }) {
    return (
        <div className="GridContainer">
            {content.map((e,index) => {
                return (
                    <div className="GridItem" key={index} onClick={() => {
                        setProblemIndex(index);
                        setShowMenu(true);
                    }}>
                        <GridBox element={e} />
                    </div>
                );
            })}
        </div>
    )
}

export default Grid;