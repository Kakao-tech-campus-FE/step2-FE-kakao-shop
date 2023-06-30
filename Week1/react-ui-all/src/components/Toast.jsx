import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars

import "./Toast.css";

export const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick} className="Toast">
        구매하기
      </button>
      {showToast && <div className="toast"> 품절되었습니다!</div>}
    </div>
  );
};
