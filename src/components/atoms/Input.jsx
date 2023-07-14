/*eslint-disable react/prop-types */

// set the props of the input element by recieving parameters

import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Input.css";
const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
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
