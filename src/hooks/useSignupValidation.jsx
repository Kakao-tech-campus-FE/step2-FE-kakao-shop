import { useState } from "react";

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$");
const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);

const ERROR_MSG = {
  requiredEmail: "이메일을 입력해 주세요.",
  requiredUsername: "이름을 입력해 주세요.",
  requiredPw: "비밀번호를 입력해 주세요.",
  requiredConfirmPw: "비밀번호 확인을 입력해 주세요.",
  invalidEmail: "이메일을 정확하게 입력해 주세요.",
  invalidPw: "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

export default function useSignupValidation({ form }) {
  const [error, setError] = useState("");

  const checkEmailValidation = () => {
    const { email } = form;

    let result;
    if (email.length === 0) {
      result = "requiredEmail";
    } else if (!EMAIL_REGEX.test(email)) {
      result = "invalidEmail";
    } else {
      return [false, ""];
    }
    return [ERROR_MSG[result], "email"];
  };

  const checkRegex = () => {
    const { username, password, passwordConfirm } = form;

    let result;
    let type;
    const resultOfEmail = checkEmailValidation();
    if (resultOfEmail[0] !== false) {
      return resultOfEmail;
    } else if (username.length === 0) {
      result = "requiredUsername";
      type = "nickname";
    } else if (password.length === 0) {
      result = "requiredPw";
      type = "password";
    } else if (!PW_REGEX.test(password)) {
      result = "invalidPw";
      type = "password";
    } else if (passwordConfirm.length === 0) {
      result = "requiredConfirmPw";
      type = "confirmPw";
    } else if (password !== passwordConfirm) {
      result = "invalidConfirmPw";
      type = "confirmPw";
    } else {
      return [false, ""];
    }
    return [ERROR_MSG[result], type];
  };

  return { error, setError, checkEmailValidation, checkRegex };
}
