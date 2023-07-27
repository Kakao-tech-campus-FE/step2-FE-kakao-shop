import { useState } from "react";
import { EMAIL_REGEX, PW_REGEX } from "../utils/regex";

const ERROR_RESULT = {
  requiredEmail: ["이메일을 입력해 주세요.", "email"],
  requiredUsername: ["이름을 입력해 주세요.", "nickname"],
  requiredPw: ["비밀번호를 입력해 주세요.", "password"],
  requiredConfirmPw: ["비밀번호 확인을 입력해 주세요.", "confirmPw"],
  invalidEmail: ["이메일을 정확하게 입력해 주세요.", "email"],
  invalidPw: [
    "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
    "password",
  ],
  invalidConfirmPw: ["비밀번호가 일치하지 않습니다.", "confirmPw"],
};

export default function useSignupValidation({ form }) {
  const [error, setError] = useState("");

  const checkEmailValidation = () => {
    const { email } = form;

    let result;
    if (email.length === 0) result = "requiredEmail";
    else if (!EMAIL_REGEX.test(email)) result = "invalidEmail";

    return result ? ERROR_RESULT[result] : [false, ""];
  };

  const checkRegex = () => {
    const { username, password, passwordConfirm } = form;

    let result;
    const resultOfEmail = checkEmailValidation();
    if (resultOfEmail[0] !== false) return resultOfEmail;
    else if (username.length === 0) result = "requiredUsername";
    else if (password.length === 0) result = "requiredPw";
    else if (!PW_REGEX.test(password)) result = "invalidPw";
    else if (passwordConfirm.length === 0) result = "requiredConfirmPw";
    else if (password !== passwordConfirm) result = "invalidConfirmPw";

    return result ? ERROR_RESULT[result] : [false, ""];
  };

  return { error, setError, checkEmailValidation, checkRegex };
}
