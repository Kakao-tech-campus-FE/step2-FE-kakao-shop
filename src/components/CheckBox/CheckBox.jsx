import React from "react";

export default function CheckBox({ name, value, id, onChange, label }) {
  return (
    <div className="check-label">
      <input
        type="checkbox"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        className="check-button"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
