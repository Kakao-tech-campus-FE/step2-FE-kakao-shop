import React, { useState } from 'react'; // eslint-disable-line no-unused-vars

export const Radiobutton = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="1"
          checked={selectedOption === '1'}
          onChange={handleOptionChange}
        />
        1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="2"
          checked={selectedOption === '2'}
          onChange={handleOptionChange}
        />
        2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="3"
          checked={selectedOption === '3'}
          onChange={handleOptionChange}
        />
        3
      </label>
    </div>
  );
};
