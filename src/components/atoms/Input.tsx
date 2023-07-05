import React from 'react';

interface inputProps {
  type?: string;
  value?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const Input = ({ type, value, id, onChange, placeholder }: inputProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="h-[40px] rounded px-2 bg-subGray"
    />
  );
};

export default Input;
