import React from "react";
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import Box from "../../atoms/Box";

/**
 * @description InputGroup 컴포넌트
 *
 * @param {object} props - InputGroup 컴포넌트의 속성(props).
 * @param {React.ReactNode} props.children - InputGroup 내부의 자식 요소(children).
 * @param {React.RefObject<HTMLElement>} [props.inputRef=""] - input 태그의 ref값. ref 객체를 전달받습니다.
 * @param {string} [props.id=""] - input 태그와 label 태그를 연결할 id 값. 문자열로 입력받습니다.
 * @param {string} [props.type=""] - <input> 태그의 타입 값. 문자열로 입력받습니다.
 * @param {string} [props.value=""] - <input> 태그의 값. 문자열로 입력받습니다.
 * @param {string} [props.name=""] - <input> 태그의 name 값. 문자열로 입력받습니다.
 * @param {string} [props.placeholder=""] - <input> 태그의 placeholder 값. 문자열로 입력받습니다.
 * @param {boolean} [props.autoFocus=false] - autofocus 기능을 사용할지 여부. 기본값은 false입니다.
 * @param {Function} [props.onChange=() => {}] - 입력되는 값이 변경될 때 호출되는 콜백함수. 기본값은 빈 함수입니다.
 * @returns {JSX.Element} InputGroup 컴포넌트의 JSX 요소.
 */
export default function InputGroup({
  children,
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
    <Box className="flex flex-col grow">
      <Label htmlFor={id}>{children}</Label>
      <Input
        inputRef={inputRef}
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </Box>
  );
}
