import React, { useState } from 'react';

function RadioButton({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioButton;
