import React from "react";

/*
 * inputRef: focus를 주기 위해 ref 설정을 위한 props
 * id: <Label>과 연결할 id 값을 입력받음
 * type: <input> 태그의 타입을 입력받음
 * value: <input> 태그의 값을 입력받음
 * name: <input> 태그의 name 값을 입력받음
 * placeholder: <input> 태그의 placeholder를 입력받음
 * autoFocus: 페이지에 들어오면 포커스를 주기 위한 props
 * onChange: 입력되는 값이 변경될 때 실행할 콜백함수를 전달받음
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
