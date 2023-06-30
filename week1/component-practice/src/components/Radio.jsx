import React from "react";
import "../styles/Radio.css";

export default function Radio({ option, checked, onChange }) {
  return (
    <>
      <label key={option.value} className="radio" style={{ width: "200px" }}>
        <div
          className={`radio-box ${option.value === checked ? "checked" : ""}`}
        ></div>
        <input
          type="radio"
          value={option.value}
          className="radiobutton"
          checked={option.value === checked}
          onChange={onChange}
        />
        <span>{option.text}</span>
        <br></br>
      </label>
    </>
  );
}
