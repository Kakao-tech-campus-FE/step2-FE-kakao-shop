import Container from "../atoms/Conatiner";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/user";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useNavigate } from "react-router-dom";
import "../../styles/organisms/Form.css";
import React, { useState } from "react";

const staticServerUrl = process.env.REACT_APP_PATH || "";
//hook으로
const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    value,
    handleOnChange,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
    emailError,
    pwError,
    pwConfirmError,
  } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState("");

  const handleRegister = () => {
    if (emailError || pwError || pwConfirmError) {
      return;
    }
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((res) => {
        navigate(staticServerUrl + "/"); //회원가입 성공하면 메인 페이지로 리다이렉트
      })
      .catch((err) => {
        console.log("err", err);
        if (err.data?.error?.message) {
          setError(err.data.error.message);
        } else {
          setError("회원가입 실패");
        }
      });
  };

  return (
    <div className="form-wrapper">
      <Container>
        <Title>회원가입</Title>
        <InputGroup
          id="username"
          name="username"
          type="text"
          placeholder="사용자 이름을 입력하세요."
          label="이름"
          value={value.username} //{username}
          onChange={handleOnChange} //(e)=> { setUsername(e.target.value)}
        />
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="이메일(아이디)를 입력하세요."
          label="이메일"
          value={value.email}
          onChange={handleOnChange}
          onBlur={validateEmail}
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="**********"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
          onBlur={validatePassword}
        />
        {pwError && <p className="error-message">{pwError}</p>}
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="**********"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
          onBlur={validatePasswordConfirm}
        />
        {pwError && <p className="error-message">{pwConfirmError}</p>}
        {error}
        <Button onClick={handleRegister}>회원가입</Button>
      </Container>
    </div>
  );
};

export default RegisterForm;
