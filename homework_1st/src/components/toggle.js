import React, { useState } from 'react';
import '../styles/toggle.css';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <div className={`toggle-btn ${isOn ? 'off' : ''}`}>
            <button className={`toggle ${isOn ? 'off' : ''}`} onClick={handleClick}>
                {isOn ? 'off' : 'on'}
            </button>
        </div>
    );
}

export default Toggle;
