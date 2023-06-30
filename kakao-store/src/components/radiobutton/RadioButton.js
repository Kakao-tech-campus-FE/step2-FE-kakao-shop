import React, { useState } from 'react';
import './RadioButton.css'; // You can create your own CSS for styling

const RadioButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="radio-button">
      {options.map((option, index) => (
        <label key={index} className="radio-button-label">
          <input
            type="radio"
            value={option.value}
            checked={option.value === selectedOption}
            onChange={() => handleOptionChange(option.value)}
          />
          <span className="radio-button-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
