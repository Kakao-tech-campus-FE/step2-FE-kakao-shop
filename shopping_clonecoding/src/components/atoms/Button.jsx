/*eslint-disable react/prop-types */
// Run onClick function when click event occurs, preventing event from default behavior.
import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Button.css";
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
