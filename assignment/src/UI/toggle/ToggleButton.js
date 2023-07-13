import React, { useState } from 'react';
import './ToggleButton.css';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`toggle ${isToggled ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className={`switch ${isToggled ? 'on' : 'off'}`}></div>
    </div>
  );
}

export default Toggle;
