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
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
