import React from "react";

// type : input 요소의 타입 지정
// value : input 요소를 통해 받은 값, 부모 컴포넌트로부터 props를 전달받아 처리
// name : useInput 커스텀 훅에서 name과 함께 값 세팅을 위해 필요
// onChange : 사용자의 입력에 따라 변화하는 이벤트 감지 기능
// placeholder : input 요소에 미리 지정해놓을 수 있는 텍스트 기능(미리보기)
// className : Input컴포넌트에 적용할 CSS를 위한 className
// id : 고유 식별자 역할 수행
const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
  return (
    <>
      <input
        id={id}
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
