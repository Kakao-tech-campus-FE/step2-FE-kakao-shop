import React, { useState } from 'react';

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="radio-button">
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Radio 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Radio 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Radio 3
      </label>
    </div>
  );
};

export default RadioButton;
