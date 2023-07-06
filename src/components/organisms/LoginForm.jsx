import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { login } from "../../services/api";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { useNavigate } from 'react-router-dom'
// import useInputError from "../../hooks/useInputError";

const LoginForm = () => {
  // global state 변경할 때
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // global state 가져올 때
  // state는 /src/store/index.js 안에 선언된 state임
  const email = useSelector((state) => state.user.email);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  // const { errorMsg, handleOnBlur } = useInputError("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const [loginState, setLoginState] = useState(false);

  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      // 정상적인 로그인 시
      .then((res) => {
        dispatch(
          setEmail({
            email: value.email,
          })
        );
        setLoginState(true);
        navigate("/");
      })
      // 에러 났을 시
      .catch((error) => {
        setLoginState(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="아이디(이메일)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
        // onBlur={handleOnBlur}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        // onBlur={handleOnBlur}
      />

      <Button
        onClick={() => {
          // API 요청 보내기 전 검사
          loginReq();
        }}
      >
        로그인
      </Button>
      <>{errorMsg}</>
    </Container>
  );
};

export default LoginForm;
