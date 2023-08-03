import { useState } from "react";
import { useRegister } from "../../apis/register";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import GNB from "../atoms/GNB";

const RegisterForm = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const registerMutation = useRegister();

  const { value, handleOnChange, reset } = useInput({
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
      await registerMutation.mutateAsync({
        email: value.email,
        password: value.password,
        username: value.username,
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const validateName = (name) => {
    if (!name) {
      return "사용자 이름을 입력하세요.";
    }
    return;
  };

  const handleNameBlur = (event) => {
    const name = event.target.value;
    handleOnChange(event);
    const nameError = validateName(name);
    setNameError(nameError);
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
    <div className="mt-32">
      <Title>
        <GNB />
      </Title>
      <Container>
        <InputGroup
          id="username"
          name="username"
          type="text"
          value={value.username}
          onChange={handleOnChange}
          placeholder="사용자 이름"
          className={`${nameError ? "border-red-500" : ""}`}
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
          className={`${emailError ? "border-red-500" : ""}`}
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
          className={`${passwordError ? "border-red-500" : ""}`}
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
          className={`${passwordConfirmError ? "border-red-500" : ""}`}
          label="비밀번호 확인"
          error={passwordConfirmError}
          onBlur={handlePasswordConfirmBlur}
        />
        {passwordConfirmError && (
          <p className="text-red-500 mb-2">{passwordConfirmError}</p>
        )}
        <Button
          onClick={handleRegister}
          className="block bg-amber-300 text-white font-semibold rounded-lg w-full h-10 mt-8"
        >
          회원가입
        </Button>
      </Container>
    </div>
  );
};

export default RegisterForm;
