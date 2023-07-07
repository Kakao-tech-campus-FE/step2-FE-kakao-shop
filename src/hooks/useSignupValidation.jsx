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

    if (email.length === 0) {
      return [ERROR_MSG.requiredEmail, "email"];
    }
    if (!EMAIL_REGEX.test(email)) {
      return [ERROR_MSG.invalidEmail, "email"];
    }
    return [false, ""];
  };

  const checkRegex = () => {
    const { username, password, passwordConfirm } = form;

    const resultOfEmail = checkEmailValidation();
    if (resultOfEmail[0] !== false) {
      return resultOfEmail;
    }
    if (username.length === 0) {
      return [ERROR_MSG.requiredUsername, "nickname"];
    }
    if (password.length === 0) {
      return [ERROR_MSG.requiredPw, "password"];
    }
    if (!PW_REGEX.test(password)) {
      return [ERROR_MSG.invalidPw, "password"];
    }
    if (passwordConfirm.length === 0) {
      return [ERROR_MSG.requiredConfirmPw, "confirmPw"];
    }
    if (password !== passwordConfirm) {
      return [ERROR_MSG.invalidConfirmPw, "confirmPw"];
    }
    return [false, ""];
  };

  return { error, setError, checkEmailValidation, checkRegex };
}
