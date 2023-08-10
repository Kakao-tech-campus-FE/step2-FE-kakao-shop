import React from "react";

const Input = ({
  type,
  value,
  name,
  onChange,
  placeholder,
  className,
  id
}) => {
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
};

export default Input;