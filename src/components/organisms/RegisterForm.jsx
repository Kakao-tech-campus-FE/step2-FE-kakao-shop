import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/api";
import { useState } from "react";

const RegisterForm = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    try {
      await register({
        email: value.email,
        password: value.password,
        username: value.username,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameBlur = (event) => {
    const name = event.target.value;
    handleOnChange(event);
    if (!name) {
      setNameError("사용자 이름을 입력하세요.");
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!isEmailValid(value.email)) {
      setEmailError("유효한 이메일을 입력해주세요. (예: kakao@kakao.com)");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!isPasswordValid(value.password)) {
      setPasswordError(
        "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백 없이 8~20자여야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordConfirmBlur = () => {
    if (value.password !== value.passwordConfirm) {
      setPasswordConfirmError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      setPasswordConfirmError("");
    }
  };

  return (
    <Container>
      <InputGroup
        id="username"
        name="username"
        type="text"
        value={value.username}
        onChange={handleOnChange}
        placeholder="사용자 이름"
        className={`border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md ${
          nameError ? "border-red-500" : ""
        }`}
        label="이름"
        error={nameError}
        onBlur={handleNameBlur}
      />
      {nameError && <p className="text-red-500 mb-2">{nameError}</p>}
      <InputGroup
        id="email"
        name="email"
        type="email"
        value={value.email}
        onChange={handleOnChange}
        placeholder="이메일"
        className={`border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md ${
          emailError ? "border-red-500" : ""
        }`}
        label="이메일(아이디)"
        error={emailError}
        onBlur={handleEmailBlur}
      />
      {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
      <InputGroup
        id="password"
        name="password"
        type="password"
        value={value.password}
        onChange={handleOnChange}
        placeholder="비밀번호"
        className={`border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md ${
          passwordError ? "border-red-500" : ""
        }`}
        label="비밀번호"
        error={passwordError}
        onBlur={handlePasswordBlur}
      />
      {passwordError && <p className="text-red-500 mb-2">{passwordError}</p>}
      <InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        value={value.passwordConfirm}
        onChange={handleOnChange}
        placeholder="비밀번호 확인"
        className={`border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md ${
          passwordConfirmError ? "border-red-500" : ""
        }`}
        label="비밀번호 확인"
        error={passwordConfirmError}
        onBlur={handlePasswordConfirmBlur}
      />
      {passwordConfirmError && (
        <p className="text-red-500 mb-2">{passwordConfirmError}</p>
      )}
      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;
