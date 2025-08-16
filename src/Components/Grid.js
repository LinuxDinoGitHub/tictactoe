import React from 'react';
import GridBox from './GridBox.js';
function Grid({ n, content}) {
    return (
        <div className="GridContainer">
            {content.map((e,index) => {
                return (
                    <div className="GridItem" key={index}>
                        <GridBox element={e} />
                    </div>
                );
            })}
        </div>
    )
}

export default Grid;