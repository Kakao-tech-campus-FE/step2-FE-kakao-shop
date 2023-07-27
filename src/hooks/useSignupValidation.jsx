import { useState } from "react";
import { EMAIL_REGEX, PW_REGEX, SIGNUP_ERROR_RESULT } from "../utils/constant";

export default function useSignupValidation({ form }) {
  const [error, setError] = useState("");

  const checkEmailValidation = () => {
    const { email } = form;

    let result;
    if (email.length === 0) result = "requiredEmail";
    else if (!EMAIL_REGEX.test(email)) result = "invalidEmail";

    return result ? SIGNUP_ERROR_RESULT[result] : [false, ""];
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

    return result ? SIGNUP_ERROR_RESULT[result] : [false, ""];
  };

  return { error, setError, checkEmailValidation, checkRegex };
}
