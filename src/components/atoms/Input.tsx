import React from 'react';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ id, type, placeholder, value, name, onChange }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neutral-600 focus-visible:outline-none sm:text-sm sm:leading-6'
    />
  );
};

export default Input;
