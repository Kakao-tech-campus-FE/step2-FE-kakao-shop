import React from "react";
import "./toggle.css";

const Toggle = () => {
  return (
    <label className="toggle">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default Toggle;
