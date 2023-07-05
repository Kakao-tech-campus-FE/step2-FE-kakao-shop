import React, { useState } from 'react';

export default function Checkbox() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type='checkbox'
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
