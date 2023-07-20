import React from "react";
import { ClipLoader } from "react-spinners";

const Button = ({
  valid = true,
  className = "",
  onClick,
  children,
  isLoading,
}) => {
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
      {!isLoading ? children : <ClipLoader size="20" color="#a48c00" />}
    </button>
  );
};

export default Button;
