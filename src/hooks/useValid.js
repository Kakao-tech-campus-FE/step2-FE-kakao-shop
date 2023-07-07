import { useState } from "react";

const useValid = (initialValue, formValue) => {
  const [valid, setValid] = useState(initialValue);

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    checkRegex(name, value);
  };

  const checkRegex = (name, value) => {
    const EMAIL_REGEX = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    const PW_REGEX =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    let result;
    if (value.length === 0) {
      result = "required";
    } else {
      switch (name) {
        case "email":
          result = EMAIL_REGEX.test(value) ? true : "invalidEmail";
          break;
        case "username":
          result = true;
          break;
        case "password":
          result = PW_REGEX.test(value) ? true : "invalidPw";
          checkRegex("passwordConfirm", formValue["passwordConfirm"]);
          break;
        case "passwordConfirm":
          result = value === formValue["password"] ? true : "invalidPwConfirm";
          break;
        default:
          return;
      }
    }
    setValid((prev) => ({ ...prev, [name]: result }));
  };
  return { valid, handleOnBlur };
};

export default useValid;
