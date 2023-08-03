import React from "react";

/**
 * @description Input 컴포넌트
 *
 * @param {object} props - Input 컴포넌트의 속성(props).
 * @param {React.RefObject<HTMLElement>} [props.inputRef=""] - input 태그의 ref값. ref 객체를 전달받습니다.
 * @param {string} [props.id=""] - label 태그와 연결할 id 값. 문자열로 입력받습니다.
 * @param {string} [props.type=""] - <input> 태그의 타입 값. 문자열로 입력받습니다.
 * @param {string} [props.value=""] - <input> 태그의 값. 문자열로 입력받습니다.
 * @param {string} [props.name=""] - <input> 태그의 name 값. 문자열로 입력받습니다.
 * @param {string} [props.placeholder=""] - <input> 태그의 placeholder 값. 문자열로 입력받습니다.
 * @param {boolean} [props.autoFocus=false] - autofocus 기능을 사용할지 여부. 기본값은 false입니다.
 * @param {Function} [props.onChange=() => {}] - 입력되는 값이 변경될 때 호출되는 콜백함수. 기본값은 빈 함수입니다.
 * @returns {JSX.Element} Input 컴포넌트의 JSX 요소.
 */
export default function Input({
  inputRef,
  id,
  type,
  value,
  name,
  placeholder,
  autoFocus = false,
  onChange = () => {},
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
