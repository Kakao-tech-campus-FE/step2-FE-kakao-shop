import React from "react";
import "./Toggle.css";

function Toggle(props) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-checkbox"
        onChange={props.onChange}
        id={props.value}
        name={props.className}
      />
      <label className="toggle-label" htmlFor={props.value}>
        <span className="toggle-slider" />
      </label>
    </div>
  );
}

export default Toggle;
