import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { login } from "../../services/user";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
// import useInputError from "../../hooks/useInputError";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const [errorMsg, setErrorMsg] = useState("");
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        dispatch(
          setEmail({
            email: value.email,
            loggedInAt: new Date().getTime(),
          })
        );
        localStorage.setItem("token", res.headers.authorization);
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

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