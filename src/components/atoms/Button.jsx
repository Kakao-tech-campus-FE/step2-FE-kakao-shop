import React from "react";

const Button = ({
  valid = true, // 버튼 활성화 : 회원가입 유효성 검사를 통과하지 못할 경우 비활성화
  className, // style 재사용성
  onClick, // click 이벤트 핸들러
  children,
}) => {
  return (
    <button
      disabled={!valid}
      // 버튼 활성화시 -> 노란색 , 비활성화시 -> 회색
      className={`rounded-md p-3 ${
        !valid || valid === "gray" ? "bg-gray-100" : "bg-kakao"
      } ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
