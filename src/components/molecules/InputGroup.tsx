import React from 'react';
import Input from '@components/atoms/Input';
import Label from '@components/atoms/Label';
import HelperText from '@components/atoms/HelperText';

interface InputGroupProps {
  inputName?: string;
  labelName?: string;
  value?: string;
  helperText?: string;
  inputType?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputGroup = ({ inputName, labelName, value, helperText, inputType, onChange }: InputGroupProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex space-x-4">
        <Label htmlFor={inputName}>{labelName}</Label>
        <HelperText className="text-subRed">{helperText}</HelperText>
      </div>
      <Input type={inputType} id={inputName} value={value} onChange={onChange} />
    </div>
  );
};

export default InputGroup;
