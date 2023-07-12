import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div>
      <button className={isToggled ? 'active' : ''} onClick={toggleButton}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;