import React, { useState, useEffect } from 'react';
import '../styles/ToggleButtonEx.css';
import ToggleButton from "../components/ToggleButton";

const ToggleButtonEx = () => {
    const [isToggleButtonOn, setIsToggleButtonOn] = useState();

    useEffect(() => {
        console.log(isToggleButtonOn ? 'On' : 'Off');
    }, [isToggleButtonOn]);

    const handleToggleButtonClick = () => {
        setIsToggleButtonOn((prevState) => !prevState);
    };

    return (
        <div>
            <h2>토글버튼</h2>
            <div className="toggle-button-wrapper">
                <div className="emoji">{isToggleButtonOn ? '😄' : '😭'}</div>
                <ToggleButton isOn={isToggleButtonOn} onClick={handleToggleButtonClick} />
            </div>
        </div>
    );
}

export default ToggleButtonEx;
