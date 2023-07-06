import React from 'react';
import Input from '@components/atoms/Input';
import Label from '@components/atoms/Label';

interface InputGroupProps {
  inputName?: string;
  labelName?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputGroup = ({ inputName, labelName, value, onChange }: InputGroupProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor={inputName}>{labelName}</Label>
      <Input type="text" id={inputName} value={value} onChange={onChange} />
    </div>
  );
};

export default InputGroup;
