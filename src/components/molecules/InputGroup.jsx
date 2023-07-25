import React from "react";
import Box from "../atoms/Box";
import ErrorMsg from "../atoms/ErrorMsg";

/**
 * InputGroup Component - 입력 그룹 컴포넌트
 * 
 * @param {Object} props - 입력 그룹 컴포넌트의 속성들
 * @param {string} props.id - 입력 필드와 라벨의 연결을 위한 고유 ID
 * @param {string} props.name - 입력 필드의 이름
 * @param {string} props.type - 입력 필드의 타입 (ex: text, email, password)
 * @param {string} props.value - 입력 필드의 값
 * @param {Function} props.onChange - 입력 값 변경 이벤트 핸들러 함수
 * @param {string} [props.className=""] - 추가 CSS 클래스 이름
 * @param {string} props.label - 입력 필드와 연결된 라벨의 내용
 * @param {string} props.placeholder - 입력 필드의 placeholder 텍스트
 * @param {Function} [props.onBlur] - 입력 필드의 Blur 이벤트 핸들러 함수
 * @param {string} [props.invalid] - 입력 필드의 유효하지 않은 값에 대한 오류 메시지
 * 
 * @returns {JSX.Element} - 입력 그룹 컴포넌트를 반환합니다.
 */
const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
  onBlur,
  invalid,
}) => {
  return (
    <Box className={`border border-gray-300 rounded p-4 mb-4 bg-white text-left ${className}`}>
      <label htmlFor={id} className="text-base">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className="border border-gray-300 rounded w-full h-10 px-3 mt-2 mb-2"
      />
      <ErrorMsg errorMsg={invalid} name={name} />
    </Box>
  );
};

export default InputGroup;