import Container from "../atoms/Container";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { useState } from "react";
import Gnb from "../molecules/Gnb";

const LoginForm = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const { value, handleOnChange, reset } = useInput({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      dispatch(
        loginRequest({
          email: value.email,
          password: value.password,
        })
      );
      reset();
    } catch {
      console.log("login fail....");
    }
  };

  const validateValue = (value, validationRegex, errorMessage) => {
    if (!validationRegex.test(value)) {
      return errorMessage;
    }
    return "";
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    const errorMessage = "유효한 이메일을 입력해주세요. (예: kakao@kakao.com)";
    const emailError = validateValue(value.email, emailRegex, errorMessage);
    setEmailError(emailError);
  };

  const handlePasswordBlur = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;
    const errorMessage =
      "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백 없이 8~20자여야 합니다.";
    const passwordError = validateValue(
      value.password,
      passwordRegex,
      errorMessage
    );
    setPasswordError(passwordError);
  };

  return (
    <div className="mt-32">
      <Title>
        <Gnb />
      </Title>
      <Container>
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
      </Container>
      <div className="text-center">
        <Button
          onClick={handleLogin}
          className="inline-block border border-solid border-amber-300 rounded-md p-4 mb-4 bg-amber-300 shadow-md"
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
