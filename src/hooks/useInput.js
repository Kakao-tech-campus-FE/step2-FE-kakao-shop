import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validateEmail = () => {
    if (!value.email) {
      setEmailError("이메일 주소를 입력하세요.");
    } else if (!value.email.includes("@")) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};:,.<>?])[a-zA-Z\d!@#$%^&*()\-=_+{};:,.<>?]+$/;

    if (!value.password) {
      setPasswordError("비밀번호를 입력하세요.");
    } else if (!passwordRegex.test(value.password)) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하여 8-20자로 이루어져야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  return {
    value,
    emailError,
    passwordError,
    handleChange,
    validateEmail,
    validatePassword,
  };
};

export default useInput;
