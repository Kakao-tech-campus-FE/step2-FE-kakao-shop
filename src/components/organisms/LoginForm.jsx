import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register, login } from "../../services/api";
import Title from '../atoms/Title';

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  return (
    <Container>
      <Title>로그인</Title>
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


      <Button
        onClick={() => {
          login({
            email: value.email,
            password: value.password,
          });
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default RegisterForm;
