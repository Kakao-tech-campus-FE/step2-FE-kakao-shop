import React, { useState } from 'react';
import '../styles/RadioButton.css';

const RadioButton = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="radio-button-container">
      <div className="radio-button-box">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <p>Select : {selectedOption}</p>
    </div>
  );
};

export default RadioButton;
