import React, { useState } from 'react';
import '../styles/radio.css';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="RadioButtonsContainer">
      <label className="RadioButton">
        <input
          type="radio"
          value="짱구"
          checked={selectedOption === '짱구'}
          onChange={handleOptionChange}
        />
        짱구
      </label>
      <label className="RadioButton">
        <input
          type="radio"
          value="짱아"
          checked={selectedOption === '짱아'}
          onChange={handleOptionChange}
        />
        짱아
      </label>
      <label className="RadioButton">
        <input
          type="radio"
          value="신형만"
          checked={selectedOption === '신형만'}
          onChange={handleOptionChange}
        />
        신형만
      </label>
    </div>
  );
};

export default RadioButtons;
