import React from "react"; // eslint-disable-line no-unused-vars

const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={className}
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