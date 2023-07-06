import React from "react";

/*
 * inputRef: focus를 주기 위해 ref 설정을 위한 props
 * autoFocus: 페이지에 들어오면 포커스를 주기 위한 props
 */
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
