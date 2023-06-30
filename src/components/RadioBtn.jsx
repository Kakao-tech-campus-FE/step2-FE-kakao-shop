import React, { useState } from 'react';

export default function RadioBtn() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type='radio'
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
