import { useState } from "react";
import { EMAIL_REGEX, PW_REGEX } from "../utils/constant";

const ERROR_RESULT = {
  requiredEmail: ["이메일을 입력해 주세요.", "email"],
  requiredPw: ["비밀번호를 입력해 주세요.", "password"],
  invalidEmail: ["이메일을 정확하게 입력해 주세요.", "email"],
  invalidPw: [
    "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
    "password",
  ],
};

export default function useLoginValidation({ form }) {
  const [error, setError] = useState(false);

  const checkRegex = () => {
    const { email, password } = form;

    let result;
    if (email.length === 0) result = "requiredEmail";
    else if (!EMAIL_REGEX.test(email)) result = "invalidEmail";
    else if (password.length === 0) result = "requiredPw";
    else if (!PW_REGEX.test(password)) result = "invalidPw";

    return result ? ERROR_RESULT[result] : [false, ""];
  };

  return { error, setError, checkRegex };
}
