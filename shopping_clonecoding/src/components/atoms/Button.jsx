/*eslint-disable react/prop-types */
import React from "react"; //eslint-disable-line no-unused-vars
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
