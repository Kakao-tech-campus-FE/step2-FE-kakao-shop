import React from "react";

const Input = ({ id, name, type, value, onChange, placeholder }) => {
  return (
    <input
      className="my-1 rounded-md border border-gray-300 px-2 py-1.5"
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
