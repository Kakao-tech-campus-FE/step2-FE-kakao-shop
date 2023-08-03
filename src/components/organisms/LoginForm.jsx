import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import GNB from "../atoms/GNB";
import { loginRequest } from "../../store/slices/userSlice";

const staticServerUri = process.env.REACT_APP_PATH || "";

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
      await dispatch(
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

  // 유효성 검사 에러 캐칭
  const validateValue = (value, validationRegex, errorMessage) => {
    if (!validationRegex.test(value)) {
      return errorMessage;
    }
    return null;
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    const errorMessage =
      "유효한 이메일을 입력해주세요. (예: example@example.com)";
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
        <GNB />
      </Title>
      <Container>
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
        <div className="text-right mt-2 pr-4">
          <Link
            to={staticServerUri + "/signup"}
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
          >
            회원가입
          </Link>
        </div>
        <Button
          onClick={handleLogin}
          className="block bg-amber-300 text-white font-semibold rounded-lg w-full h-10 mt-4"
        >
          로그인
        </Button>
      </Container>
    </div>
  );
};

export default LoginForm;
