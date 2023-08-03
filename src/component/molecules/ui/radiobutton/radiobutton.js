import React, { useState } from 'react';
import './radiobutton.css';

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div class = 'radiobuttincontainer'>
      <h1>Radio Button</h1>
      <div>
        <label>
          <input type="radio" value="젤리" checked={selectedOption === '젤리'} onChange={handleOptionChange}/>
          젤리
        </label>
        <label>
          <input type="radio" value="초콜릿" checked={selectedOption === '초콜릿'} onChange={handleOptionChange}/>
          초콜릿
        </label>
        <label>
          <input type="radio" value="사탕" checked={selectedOption === '사탕'} onChange={handleOptionChange} />
          사탕
        </label>
        </div>
      <p>선택한 옵션: {selectedOption}</p>
    </div>
  );
};

export default RadioButton;