import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
  </button>
  );
};

export default Button;