import React from "react";

export default function CheckBox({
  name,
  value,
  id,
  onChange,
  checked,
  label,
  labelClassName,
  inputClassName,
}) {
  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type="checkbox"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        checked={checked}
        className={inputClassName}
      />
      {label}
    </label>
  );
}
