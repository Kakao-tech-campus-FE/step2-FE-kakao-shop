import React from "react";
import "./Radio.css";

function Radio(props) {
  return (
    <div className={props.className}>
      {props.options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            name={props.className}
            id={option.value}
            value={option.value}
            checked={option.value === props.defaultChecked}
            onChange={props.onChange}
            className="radio-button"
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export default Radio;
