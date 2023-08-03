import React from "react";

export default function Radio({
  id,
  name,
  value,
  label,
  onChange,
  checked,
  inputClassName,
  labelClassName,
  children,
}) {
  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type="radio"
        name={name}
        id={id}
        className={inputClassName}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {children}
      {label}
    </label>
  );
}
