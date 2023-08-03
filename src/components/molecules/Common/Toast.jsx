import React from "react";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function Toast({ text, button, closeToast }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(staticServerUri + "/cart");
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
