import React, { useState } from 'react';
import '../styles/toggle.css';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="ToggleButton">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="ToggleSlider" />
    </label>
  );
};

export default ToggleButton;
