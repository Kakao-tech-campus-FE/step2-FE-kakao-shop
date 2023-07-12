import { useState } from "react";

const ERROR_MSG = {
  none: "",
  required: "필수 정보입니다.",
  invalidEmail:
    "유효하지 않은 이메일 주소입니다. 올바른 형식으로 입력해주세요.",
  invalidPw:
    "비밀번호는 영문, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.",
};
const ID_REGEX = new RegExp(
  "^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+[.]*[a-zA-Z0-9]*$"
);
const PW_REGEX = new RegExp(
  "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,20}$"
);

/**
 * 커스텀 훅
 * @설명 초기상태를 받아 각 input에 대한 value, 값의 validaton 유무, 에러메세지를 반환
 * @param initialValue
 * @returns
 */
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isValidValue, setIsValidValue] = useState(() => {
    const initialIsValidValue = {};
    for (const key in initialValue) {
      initialIsValidValue[key] = false;
    }
    return initialIsValidValue;
  });
  const [errorMsg, setErrorMsg] = useState(() => {
    const initialErrorMsg = {};
    for (const key in initialValue) {
      initialErrorMsg[key] = "";
    }
    return initialErrorMsg;
  });

  const validateInput = (e) => {
    const { name, value } = e.target;
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, isValidValue, errorMsg, handleOnChange, validateInput };
}
