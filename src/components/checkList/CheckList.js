import React, { useState } from 'react';

function CheckList({ options, onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }

    if (onChange) {
      onChange(selectedOptions);
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
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

export default CheckList;
