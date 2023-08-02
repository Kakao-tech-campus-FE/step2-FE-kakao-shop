import React from "react"; // eslint-disable-line no-unused-vars

const Button = ({ color, onClick, children, className }) => {
  return (
    <button
      className={className}
      color={color}
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