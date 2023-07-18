// src/components/organisms/LoginForm.jsx
import React, { useState, useEffect } from "react";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import useLoginRequestAction from "../../hooks/useLoginRequestAction";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, loading } = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");

  const [values, handleOnChange, getValue] = useInput({
    email: "",
    password: "",
  });

  const loginRequest = useLoginRequestAction();

  const handleLogin = async () => {
    if (values.email.trim() === "" || values.password.trim() === "") {
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    try {
      await loginRequest({
        email: values.email,
        password: values.password,
      });
      console.log("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("로그인에 실패하였습니다.", error);
      setErrorMessage("로그인에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (email) {
      dispatch(setEmail({ email }));
      navigate("/");
    }
  }, [dispatch, email, navigate]);

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder=" 이메일"
        label="이메일(아이디) "
        value={getValue("email")}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="  비밀번호"
        label="비밀번호 "
        value={getValue("password")}
        onChange={handleOnChange}
      />
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "로딩 중 " : "로그인"}
      </Button>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        <a href="#" onClick={handleRegister}>
          회원가입
        </a>
      </p>
    </Container>
  );
};

export default LoginForm;