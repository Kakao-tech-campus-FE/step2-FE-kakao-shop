// src/components/molecules/InputGroup.jsx
// InputGroup component : 입력 그룹 
// id: 입력 필드와 라벨의 연결을 위한 고유 ID
// name: 입력 필드의 이름
// type: 입력 필드의 타입 (ex: text, email, password)
// value: 입력 필드의 값
// onChange: 입력 값 변경 이벤트 핸들러 함수
// className: 추가 CSS 클래스 이름
// label: 입력 필드와 연결된 라벨의 내용
// placeholder: 입력 필드의 placeholder 텍스트

import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </Box>
  );
};

export default InputGroup;
