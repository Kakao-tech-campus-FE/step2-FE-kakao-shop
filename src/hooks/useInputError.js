import { useState } from "react";

const EMAIL_REGEX = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const PW_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*-=])(?=.*[0-9]).{8,20}$/;

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidEmail: "이메일 형식으로 작성해주세요.",
  invalidPw:
    "영문, 숫자, 특수문자가 포함되어야 하고, 공백 없이 8자에서 20자 이내여야 합니다.",
  invalidPwConfirm: "비밀번호가 일치하지 않습니다.",
};

const useInputError = (initialValue) => {
  const [errorMsg, setErrorMsg] = useState(initialValue);

  const handleOnBlur = (e) => {
    switch (e.target.id) {
      case "username":
        if (!e.target.value) setErrorMsg(ERROR_MSG.required);
        else setErrorMsg("");
        break;
      case "email":
        if (!e.target.value) setErrorMsg(ERROR_MSG.required);
        else if (EMAIL_REGEX.test(e.target.value) == false)
          setErrorMsg(ERROR_MSG.invalidEmail);
        else setErrorMsg("");
        break;
      case "password":
        if (!e.target.value) setErrorMsg(ERROR_MSG.required);
        else if (PW_REGEX.test(e.target.value) == false)
          setErrorMsg(ERROR_MSG.invalidPw);
        else setErrorMsg("");
        break;
      case "passwordConfirm":
        if (!e.target.value) setErrorMsg(ERROR_MSG.required);
        // 비밀번호가 둘이 일치하는지 확인하는 코드 들어가야함
        else setErrorMsg("");
        break;
    }
  };

  return { errorMsg, handleOnBlur };
};

export default useInputError;
