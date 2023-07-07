import { useState } from "react";
import { check } from "../apis/api";

// 유효성 검사 커스텀 훅
const useValid = (initialValue, formValue, setModal) => {
  const [valid, setValid] = useState(initialValue);

  // onBlur 핸들러
  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    checkRegex(name, value);
  };

  // 이메일 중복 검사 핸들러
  const handleOnClick = () => {
    check({ email: formValue.email }).then((res) => {
      if (res === "duplicateEmail") {
        setModal(res);
        setValid((prev) => ({ ...prev, email: "duplicateEmail" }));
      } else if (res === true) {
        setModal("goodEmail");
        setValid((prev) => ({ ...prev, email: true }));
      }
    });
  };

  // 유효성 검사
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
          result = EMAIL_REGEX.test(value) ? "notConfirmed" : "invalidEmail";
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
  return { valid, handleOnBlur, handleOnClick };
};

export default useValid;
