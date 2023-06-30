import React, { useState, useCallback, useEffect } from 'react';

const ToggleButton = ({ isOn, onClick }) => {
    const [circleLeft, setCircleLeft] = useState('3px');

    const handleClick = useCallback(() => {
        onClick();
    }, [onClick]);

    useEffect(() => {
        setCircleLeft(isOn ? '29px' : '3px');
    }, [isOn]);

    const buttonClassName = `toggle-button ${isOn ? 'on' : 'off'}`; // 클래스 이름 동적으로 설정

    const circleStyle = {
        left: circleLeft
    };

    return (
        <div className={buttonClassName} onClick={handleClick}>
            <div className="toggle-circle" style={circleStyle}></div>
        </div>
    );
};

export default ToggleButton;
