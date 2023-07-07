import { useState } from "react";

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$");
const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);

const ERROR_MSG = {
  requiredEmail: "이메일을 입력해 주세요.",
  requiredPw: "비밀번호를 입력해 주세요.",
  invalidEmail: "이메일을 정확하게 입력해 주세요.",
  invalidPw: "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
};

export default function useLoginValidation({ form }) {
  const [error, setError] = useState(false);

  const checkRegex = () => {
    const { email, password } = form;

    if (email.length === 0) {
      return [ERROR_MSG.requiredEmail, "email"];
    }
    if (!EMAIL_REGEX.test(email)) {
      return [ERROR_MSG.invalidEmail, "email"];
    }
    if (password.length === 0) {
      return [ERROR_MSG.requiredPw, "password"];
    }
    if (!PW_REGEX.test(password)) {
      return [ERROR_MSG.invalidPw, "password"];
    }
    return [false, ""];
  };

  return { error, setError, checkRegex };
}
