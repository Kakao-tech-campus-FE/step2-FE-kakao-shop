import React, { useState } from 'react';
import '../styles/ToggleButton.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <div className={`toggle-slider ${isOn ? 'on' : 'off'}`}></div>
      <div className={`toggle-label ${isOn ? 'on' : 'off'}`}>{isOn ? 'ON' : 'OFF'}</div>
    </button>
  );
};

export default ToggleButton;
