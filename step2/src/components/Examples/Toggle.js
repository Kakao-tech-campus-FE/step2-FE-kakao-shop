import React from 'react';
import './Toggle.css';

const Toggle = ({ isToggled, handleClick }) => {
  return (
    <div className={`toggle ${isToggled ? 'on' : 'off'}`}>
      <button className="toggle-button" onClick={handleClick}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
      {isToggled && <div className="toggle-message">토글이 켜졌습니다.</div>}
    </div>
  );
};

export default Toggle;