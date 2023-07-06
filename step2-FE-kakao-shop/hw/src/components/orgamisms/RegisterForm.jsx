import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../services/api";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 유효성 검사
  const [usernameMsg, setUsernameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  const onChangeUsername = (e) => {
    const USERNAME_REG = new RegExp("^[a-z0-9]{5,20}$");
    handleOnChange(e);
    console.log(value.username);
    if (USERNAME_REG.test(value.username) === false) {
      setUsernameMsg("5에서 20자리 영어 소문자, 숫자만 사용가능합니다.");
    } else {
      setUsernameMsg("");
    }
  };

  const onChangeEmail = (e) => {
    const EMAIL_REG = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$");
    handleOnChange(e);
    if (EMAIL_REG.test(value.email) === false) {
      setEmailMsg("이메일 형식으로 입력하세요.");
    } else {
      setEmailMsg("");
    }
  };

  const onChangePassword = (e) => {
    const PASSWORD_REG = new RegExp(
      "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$"
    );
    handleOnChange(e);
    if (PASSWORD_REG.test(value.password) === false) {
      setPasswordMsg("8에서 20자리 영문, 숫자, 특수기호가 포함되어야 합니다.");
    } else {
      setPasswordMsg("");
    }
  };

  const onChangePasswordConfirm = (e) => {
    handleOnChange(e);
    if (value.password !== value.passwordConfirm) {
      setPasswordConfirmMsg("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordConfirmMsg("");
    }
  };

  return (
    <Container>
      <Link to="/">
        <Title>Main page로</Title>
      </Link>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        value={value.username}
        onChange={onChangeUsername}
      />

      <div>{usernameMsg}</div>

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={onChangeEmail}
      />

      <div>{emailMsg}</div>

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={onChangePassword}
      />

      <div>{passwordMsg}</div>

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="**********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={onChangePasswordConfirm}
      />

      <div>{passwordConfirmMsg}</div>

      <Button
        onClick={() => {
          // api 회원가입 요청
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          });
          navigate("/");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
