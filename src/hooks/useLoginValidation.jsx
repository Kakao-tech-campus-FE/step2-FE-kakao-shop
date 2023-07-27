import { useState } from "react";
import { EMAIL_REGEX, LOGIN_ERROR_RESULT, PW_REGEX } from "../utils/constant";

export default function useLoginValidation({ form }) {
  const [error, setError] = useState(false);

  const checkRegex = () => {
    const { email, password } = form;

    let result;
    if (email.length === 0) result = "requiredEmail";
    else if (!EMAIL_REGEX.test(email)) result = "invalidEmail";
    else if (password.length === 0) result = "requiredPw";
    else if (!PW_REGEX.test(password)) result = "invalidPw";

    return result ? LOGIN_ERROR_RESULT[result] : [false, ""];
  };

  return { error, setError, checkRegex };
}
