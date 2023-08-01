import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/user";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux"; // eslint-disable-line no-unused-vars
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const registerReq = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      // 정상적인 로그인 시
      .then((res) => { // eslint-disable-line no-unused-vars
        navigate("/");
      })
      // 에러 났을 시
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <Container>
      <Title>회원가입</Title>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="아이디(이메일)"
        value={value.email}
        onChange={handleOnChange}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />

      <Button
        onClick={() => {
          registerReq();
        }}
      >
        회원가입
      </Button>
      <>{errorMsg}</>
    </Container>
  );
};

export default RegisterForm;