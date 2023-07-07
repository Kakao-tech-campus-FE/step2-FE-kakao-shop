import React from "react";

const Input = ({
  id, // label과 연동
  name, // input의 이름
  type, // input type
  value, // 현재 input 값
  valid, // 유효성 검사를 통과했는지
  onChange, // 회원가입시, 마지막 비밀번호 확인 input이 유효성 검사를 통과하는 즉시 버튼을 활성화시켜주기위해 사용
  onKeyPress, // 로그인시, enter키를 통해 로그인 가능하도록 사용
  onBlur, // onBlur시, 유효성 체크
  placeholder,
}) => {
  return (
    <input
      // 유효성 검사를 통과하지못할 경우 빨간 밑줄
      className={`my-1 border-b-[1.5px] py-2 text-[18px] text-[#191919] focus:border-b-[1.5px] focus:outline-none ${
        valid === undefined || valid[name] === true || valid[name] === ""
          ? "border-gray-300 focus:border-black"
          : "border-red-400  focus:border-red-400"
      }`}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
