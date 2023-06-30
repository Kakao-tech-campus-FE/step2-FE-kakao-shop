import React, { useState } from 'react';
import '../App.css';

export default function ToggleBtn() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <label className='switch'>
        <input type='checkbox' checked={isOn} onChange={handleToggle} />
        <span className='slider' />
      </label>
    </div>
  );
}
