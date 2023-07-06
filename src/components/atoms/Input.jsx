import React from "react";

export default function Input({
  inputRef,
  id,
  type,
  value,
  name,
  placeholder,
  autoFocus,
  onChange,
}) {
  return (
    <input
      ref={inputRef}
      id={id}
      className="mb-4 px-4 py-1 text-lg border rounded-md outline-none"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  );
}
