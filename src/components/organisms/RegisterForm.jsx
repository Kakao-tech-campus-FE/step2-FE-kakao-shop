import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/api";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  return (
    <Container>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="아이디(이메일)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />

      <Button
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
    </Container>
  );
};

export default RegisterForm;
