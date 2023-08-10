import React, { useState } from "react";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    // <div className="ToggleBtn">
    //   <h3>토글버튼</h3>
    //   <button className="btn" onClick={handleToggle}>
    //     {isOn ? "ON" : "OFF"}
    //   </button>
    // </div>
    <div className="Toggle">
      <h3>토글버튼</h3>
      <div
        className={`ToggleBtn ${isOn ? "ToggleBtn--on" : ""}`}
        onClick={handleToggle}
      >
        <div className="ToggleBtn__inner">
          <div className="ToggleBtn__handle" />
        </div>
      </div>
      <span>👆🏻색상을 클릭해보세요!</span>
    </div>
  );
};

export default ToggleBtn;
