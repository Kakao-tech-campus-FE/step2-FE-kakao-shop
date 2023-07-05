import { useState } from "react";

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$");
const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);

export default function useLoginValidation({ form }) {
  const [error, setError] = useState(false);

  const checkRegex = () => {
    const { email, password } = form;

    let result;
    let type;
    if (email.length === 0) {
      result = "requiredEmail";
      type = "email";
    } else if (!EMAIL_REGEX.test(email)) {
      result = "invalidEmail";
      type = "email";
    } else if (password.length === 0) {
      result = "requiredPw";
      type = "password";
    } else if (!PW_REGEX.test(password)) {
      result = "invalidPw";
      type = "password";
    } else {
      return [false, ""];
    }
    return [result, type];
  };

  return { error, setError, checkRegex };
}
