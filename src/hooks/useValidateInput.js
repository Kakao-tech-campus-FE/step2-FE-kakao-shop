import { useState } from "react";
import { ERROR_MSG } from "../utils/constant";
import { ID_REGEX, PW_REGEX } from "../utils/regex";

export default function useValidateInput() {
  const [isValidValue, setIsValidValue] = useState({
    email: false,
    password: false,
  });
  const [errorMsg, setErrorMsg] = useState({ email: "", password: "" });

  const validateInput = (name, value) => {
    // 입력이 없는 경우
    if (value.length === 0) {
      setIsValidValue((prev) => ({ ...prev, [name]: false }));
      setErrorMsg((prev) => ({ ...prev, [name]: ERROR_MSG.required }));
    } // 입력이 존재
    else {
      switch (name) {
        case "email":
          // email validation: True
          if (ID_REGEX.test(value)) {
            setIsValidValue((prev) => ({ ...prev, [name]: true }));
            setErrorMsg((prev) => ({ ...prev, [name]: ERROR_MSG.none }));
          } // email validation: False
          else {
            setIsValidValue((prev) => ({ ...prev, [name]: false }));
            setErrorMsg((prev) => ({
              ...prev,
              [name]: ERROR_MSG.invalidEmail,
            }));
          }
          break;
        case "password":
          // pw validation: True
          if (PW_REGEX.test(value)) {
            setIsValidValue((prev) => ({ ...prev, [name]: true }));
            setErrorMsg((prev) => ({ ...prev, [name]: ERROR_MSG.none }));
          } // pw validation: False
          else {
            setIsValidValue((prev) => ({ ...prev, [name]: false }));
            setErrorMsg((prev) => ({ ...prev, [name]: ERROR_MSG.invalidPw }));
          }
          break;
        default:
          // username, passwordConfirm의 입력이 존재하는 경우
          setIsValidValue((prev) => ({ ...prev, [name]: true }));
          setErrorMsg((prev) => ({ ...prev, [name]: ERROR_MSG.none }));
          break;
      }
    }
  };
  return { isValidValue, errorMsg, validateInput };
}
