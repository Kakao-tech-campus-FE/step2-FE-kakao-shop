import React, { useState } from 'react';
import Radio from './Radio';

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState('가');

  const radioList = ['가', '나', '다', '라'];

  const handleRadioButtonClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      {radioList.map((value) => (
        <Radio key={value} value={value} onRadioButtonClick={handleRadioButtonClick} selectedValue={selectedValue} />
      ))}
    </div>
  );
};

export default RadioGroup;
