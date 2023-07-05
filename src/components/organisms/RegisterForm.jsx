import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/api";
// import Box from "../atoms/Box";
import useInputError from "../../hooks/useInputError";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { errorMsg, handleOnBlur } = useInputError("");

  // useEffect(() => {}, [value.email]);

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
        onBlur={handleOnBlur}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="아이디(이메일)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />

      <Button
        onClick={() => {
          // API 요청 보내기 전 검사
          if (errorMsg === "") {
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            });
          }
        }}
      >
        회원가입
      </Button>
      <>{errorMsg}</>
    </Container>
  );
};

export default RegisterForm;