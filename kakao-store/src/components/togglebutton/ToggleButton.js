import React, { useState } from 'react';
import './ToggleButton.css'; // You can create your own CSS for styling

const ToggleButton = ({ label, onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const toggledValue = !isToggled;
    setIsToggled(toggledValue);
    onToggle(toggledValue);
  };

  return (
    <div className="toggle-button">
      <label className="toggle-button-label">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className="toggle-button-slider" />
        <span className="toggle-button-text">{label}</span>
      </label>
    </div>
  );
};

export default ToggleButton;
