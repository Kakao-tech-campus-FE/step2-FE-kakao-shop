import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitchChange = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <label htmlFor='toggle-switch'>
        <input
          id='toggle-switch'
          type='checkbox'
          className='toggle-switch'
          checked={isOn}
          onChange={handleToggleSwitchChange}
        />
      </label>
    </div>
  );
};

export default Toggle;
