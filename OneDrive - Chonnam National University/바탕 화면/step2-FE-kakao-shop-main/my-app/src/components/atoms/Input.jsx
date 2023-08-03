import React from "react"; // eslint-disable-line no-unused-vars

const Input = ({ type, value, name, onChange, onBlur, placeholder, className="", id, }) => { // eslint-disable-line no-unused-vars
  return (
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      // className={className}
    />
  );
};
export default Input;