import React from 'react';

interface RadioProps {
  value: string;
  selectedValue: string;
  onRadioButtonClick: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = ({ value, selectedValue, onRadioButtonClick }: RadioProps) => {
  return (
    <label htmlFor={value}>
      <input id={value} type='radio' value={value} checked={value === selectedValue} onChange={onRadioButtonClick} />
      {value}
    </label>
  );
};

export default Radio;
