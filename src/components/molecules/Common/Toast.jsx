import React from "react";
import { useNavigate } from "react-router-dom";

export default function Toast({ text, button, closeToast }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
    closeToast();
  };
  return (
    <div className="flex justify-between text-sm font-semibold">
      <p>{text}</p>
      {button && (
        <button className="text-yellow-300" onClick={handleClick}>
          바로가기
        </button>
      )}
    </div>
  );
}
