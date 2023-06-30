import React, { useState } from 'react';
import Radio from './Radio';

interface RadioGroupProps {
  radioGroupList: string[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioGroup = ({ radioGroupList, selectedValue, setSelectedValue }: RadioGroupProps) => {
  const handleRadioButtonClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      {radioGroupList.map((value) => (
        <Radio key={value} value={value} onRadioButtonClick={handleRadioButtonClick} selectedValue={selectedValue} />
      ))}
    </div>
  );
};

export default RadioGroup;
