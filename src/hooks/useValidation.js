import { useState } from "react";

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

const passwordRegEx = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const useValidation = (initialValue) => {
  const [msg, setMsg] = useState(initialValue);

  const emailCheck = (email) => {
    return emailRegEx.test(email) ? "" : "이메일 형식이 아닙니다.";
  };

  const pwCheck = (password) => {
    return passwordRegEx.test(password)
      ? ""
      : "영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.";
  };

  const correctPwCheck = (password, confirmPw) => {
    return password === confirmPw ? "" : "비밀번호가 일치하지 않습니다";
  };

  const handleSetMsg = (e) => {
    const { value, id } = e.target;
    let newMsg = "";
    newMsg = id === "email" ? emailCheck(value) : pwCheck(value);
    setMsg(newMsg);
  };

  const handleConfirmPwMsg = (password, confirmPassword) => {
    const newMsg = correctPwCheck(password, confirmPassword);
    setMsg(newMsg);
  };

  return { msg, handleSetMsg, handleConfirmPwMsg };
};

export default useValidation;
