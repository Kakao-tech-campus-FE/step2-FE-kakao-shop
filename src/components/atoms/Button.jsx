import React from "react";

const Button = ({ valid, onClick, children }) => {
  const allVaild = Object.values(valid).every((value) => value === true);
  return (
    <button
      disabled={!allVaild}
      className={`mt-10 rounded-md p-3 ${
        allVaild ? "bg-kakao" : "bg-gray-100"
      }`}
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
