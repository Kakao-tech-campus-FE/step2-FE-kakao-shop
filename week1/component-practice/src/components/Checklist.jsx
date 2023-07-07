import React from "react";
import "../styles/Checklist.css";

export default function Checklist({ item, onChange }) {
  const handleCheckboxChange = () => {
    onChange(item.id);
  };

  return (
    <>
      <label key={item.id} className="checklist" style={{ width: "200px" }}>
        <div className={`box ${item.checked ? "checked" : ""}`}></div>
        <input
          type="checkbox"
          className="checkbox"
          checked={item.checked}
          onChange={handleCheckboxChange}
        />
        <span>{item.text}</span>
        <br></br>
      </label>
    </>
  );
}
