import React from 'react';
import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Label from '../atoms/Label';

function InputGroup({
  id,
  type,
  value,
  name,
  onChange,
  className,
  label,
  placeholder,
  message,
}) {
  return (
    <Box className={className}>
      <Label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        message={message}
      />
    </Box>
  );
}

export default InputGroup;
