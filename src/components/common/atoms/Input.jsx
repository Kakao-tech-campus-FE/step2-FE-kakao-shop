import React from "react";

/**
 * Atom 컴포넌트
 * @param type - input type
 * @param value - input value
 * @param onChange - onChange 핸들러 함수
 * @param placeholder
 * @param id
 * @param name
 * @param onBlur - focus가 사라졌을 때 핸들러 함수
 * @param className
 * @returns input Tag
 */
export default function Input({
  type,
  value,
  onChange,
  placeholder,
  id,
  name,
  onBlur,
  className = "",
  onKeyDown,
}) {
  return (
    <input
      name={name}
      className={className}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}
