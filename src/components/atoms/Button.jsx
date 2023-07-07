import React from "react";
import { Link } from "react-router-dom";

const Button = ({ valid = true, className, onClick, children }) => {
  return (
    <button
      disabled={!valid}
      className={`rounded-md p-3 ${
        !valid || valid === "gray" ? "bg-gray-100" : "bg-kakao"
      } ${className}`}
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
