import { useState } from "react";
import { check } from "../apis/user";
import { EMAIL_REGEX, PW_REGEX } from "../constants/regex";

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
    check({ email: formValue.email })
      .then((res) => {
        if (res.status === 200) {
          setModal("goodEmail");
          setValid((prev) => ({ ...prev, email: true }));
        }
      })
      .catch((err) => {
        const errorMessage = err.response.data.error.message;
        if (errorMessage.includes("동일한 이메일이")) {
          setModal("duplicateEmail");
          setValid((prev) => ({ ...prev, email: "duplicateEmail" }));
        }
      });
  };

  // 유효성 검사
  const checkRegex = (name, value) => {
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
