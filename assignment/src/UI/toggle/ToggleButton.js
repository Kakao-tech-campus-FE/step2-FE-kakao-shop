import React, { useState } from 'react';
import './ToggleButton.css';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`toggle ${isToggled ? 'on' : 'off'}`}
      onClick={handleToggle}
    >
      <div className={`switch ${isToggled ? 'on' : 'off'}`} />
    </div>
  );
}

export default Toggle;
