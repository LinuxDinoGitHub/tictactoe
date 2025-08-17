import React from 'react';

function GridBox({ element }) {
    return (
        <div className="GridBox">
            <div className='PreviewText'>{element[0]}</div>
            {element[2] ? <img src={element[2]} alt="img" className="PreviewImage" /> : null}
        </div>
    )
}

export default GridBox;