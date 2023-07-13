import React from "react";

// props
// id: Label과 연결되기 위한 ID
// name: Input 요소의 이름
// type: 입력될 데이터의 형식
// value: Input 안에 입력될 값()
// onChange: Input 안의 내용이 바뀔 때마다 실행될 콜백
// onBlur: Input에 focus가 사라질 때마다 실행될 콜백(이메일/패스워드 형식 확인 용도)
// placeholder: Input 안에 들어갈 힌트
const Input = ({ id, name, type, value, onChange, onBlur, placeholder }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
