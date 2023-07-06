import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import styled from "styled-components";
import { register } from "../../services/api.js";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import ErrorMsg from "../atoms/ErrorMsg";

const Form = styled.form`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Button {
    margin-top: 1.5rem;
  }
`;

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

const passwordRegEx = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });

  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [password, setPassword] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");

  const [confirmPw, setConfirmPw] = useState("");
  const [confirmPwErrorMsg, setConfirmPwErrorMsg] = useState("");

  const emailCheck = (email) => {
    return emailRegEx.test(email) ? "" : "이메일 형식이 아닙니다.";
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailErrorMsg(emailCheck(email));
  };

  const pwCheck = (password) => {
    return passwordRegEx.test(password)
      ? ""
      : "영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.";
  };

  const handlePwCheck = (e) => {
    const password = e.target.value;
    setPassword(password);
    setPwErrorMsg(pwCheck(password));
  };

  const correctPwCheck = (confirmPw) => {
    return password === confirmPw ? "" : "비밀번호가 일치하지 않습니다";
  };

  const handlePwConfirm = (e) => {
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);
    setConfirmPwErrorMsg(correctPwCheck(confirmPw));
  };

  return (
    <>
      <Form>
        <InputGroup
          id="email"
          name="email"
          type="email"
          value={value.email}
          placeholder="이메일"
          onChange={(e) => {
            handleOnChange(e);
            handleEmailChange(e);
          }}
        >
          {["이메일(아이디)", emailErrorMsg]}
        </InputGroup>
        <InputGroup
          id="username"
          name="username"
          type="text"
          value={value.username}
          placeholder="이름"
          onChange={handleOnChange}
        >
          {["이름", ""]}
        </InputGroup>
        <InputGroup
          id="password"
          name="password"
          type="password"
          value={value.password}
          placeholder="비밀번호"
          onChange={(e) => {
            handleOnChange(e);
            handlePwCheck(e);
          }}
        >
          {["비밀번호", pwErrorMsg]}
        </InputGroup>
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={value.passwordConfirm}
          placeholder="비밀번호 확인"
          onChange={(e) => {
            handleOnChange(e);
            handlePwConfirm(e);
          }}
        >
          {["비밀번호 확인", confirmPwErrorMsg]}
        </InputGroup>
        <Button
          type="submit"
          styles={{
            width: "32rem",
            padding: "0.6rem",
            backgroundColor: "yellow",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
          onClick={() => {
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            });
          }}
        >
          회원가입
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
