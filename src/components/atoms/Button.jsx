import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="mt-10 rounded-lg bg-kakao p-4"
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
