import React from 'react';

const InputGroup = ({
  id,
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;


