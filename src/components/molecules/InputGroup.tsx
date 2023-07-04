import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface InputGroupProps {
  className?: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputGroup = ({ className, label, id, type, placeholder, value, name, onChange }: InputGroupProps) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />
    </div>
  );
};

export default InputGroup;
