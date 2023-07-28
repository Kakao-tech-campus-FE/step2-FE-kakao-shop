import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwConfirmError, setPwConfirmError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(value.email)) {
      setEmailError("이메일 형식을 올바르게 입력해주세요");
    } else {
      setEmailError("");
      console.log("이메일ok!");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};:,.<>?])[a-zA-Z\d!@#$%^&*()\-=_+{};:,.<>?]+$/;
    if (!passwordRegex.test(value.password)) {
      setPwError("비밀번호는 8자 이상, 영문,숫자,특수문자를 포함해야 합니다.");
    } else {
      setPwError("");
    }
  };

  const validatePasswordConfirm = () => {
    if (value.password !== value.passwordConfirm) {
      setPwConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      setPwConfirmError("");
    }
  };
  return {
    value,
    handleOnChange,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
    emailError,
    pwError,
    pwConfirmError,
  };
};

export default useInput;
