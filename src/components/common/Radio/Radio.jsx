import React from "react";
import "./Radio.css";

export default function Radio({ className, id, name, value, label, onChange }) {
  return (
    <div className={className}>
      <label htmlFor={id}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="radio-button"
        />
        {label}
      </label>
    </div>
  );
}
