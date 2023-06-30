import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import "./toggle.css";
export const Togglebutton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleToggle} className={isToggled ? "on" : "off"}>
      {isToggled ? "가격알림 On" : "가격알림 Off"}
    </button>
  );
};
