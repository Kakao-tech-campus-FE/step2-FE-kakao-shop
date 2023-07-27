import React from 'react';

export default function Input({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
}) {
  return (
    <input
      id={id}
      name={name}
      className={`${className} border border-gray-300 rounded-md my-2 px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
