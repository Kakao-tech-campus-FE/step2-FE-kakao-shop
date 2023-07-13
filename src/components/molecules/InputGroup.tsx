import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface InputGroupProps {
  className?: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  helperText?: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const InputGroup = ({
  className,
  label,
  id,
  type,
  placeholder,
  helperText,
  value,
  name,
  onChange,
  onBlur,
}: InputGroupProps) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className='mt-1 text-xs text-red-500'>{helperText}</p>
    </div>
  );
};

export default InputGroup;
