import { useState } from "react";

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$");
const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);

export default function useSignupValidation({ form }) {
  const [error, setError] = useState("");

  const checkRegex = () => {
    const { email, username, password, passwordConfirm } = form;

    let result;
    let type;
    if (email.length === 0) {
      result = "requiredEmail";
      type = "email";
    } else if (!EMAIL_REGEX.test(email)) {
      result = "invalidEmail";
      type = "email";
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
    return [result, type];
  };

  return { error, setError, checkRegex };
}
