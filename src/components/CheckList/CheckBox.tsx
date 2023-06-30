import React from 'react';

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onCheckBoxInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckBox = ({ label, isChecked, onCheckBoxInputChange }: CheckBoxProps) => {
  return (
    <div className='checkbox'>
      <label htmlFor={label}>
        <input id={label} name={label} type='checkbox' checked={isChecked} onChange={onCheckBoxInputChange} />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
