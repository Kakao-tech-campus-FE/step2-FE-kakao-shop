import React, { useState, useEffect } from 'react';
import './toggle.css';

function Toggle() { 
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive((prev) => !prev)
    };

    return (
        <div class = 'togglecontainer'>
            <h1>Toggle</h1>
            <div class = {`togglecover ${active ? 'on' : 'off'}`}>
                <button onClick={handleToggle} class = {`toggle ${active ? 'on' : 'off'}`}>
                </button>
            </div>
        </div>
    )
}

export default Toggle;