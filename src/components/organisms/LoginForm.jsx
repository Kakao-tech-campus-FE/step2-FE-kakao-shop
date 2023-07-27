import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const loginReq = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    )
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg(error.toString());
      });
  };

  return (
    <div>
      <h1>로그인</h1>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        value={value.email}
        onChange={handleOnChange}
        className="w-96 h-10 border-b-2 border-b-gray focus:outline-none focus:border-b-2 focus:border-b-black"
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        className="w-96 h-10 border-b-2 border-b-gray focus:outline-none focus:border-b-2 focus:border-b-black"
      />

      <Button
        className="w-96 h-12 bg-kakaoYellow rounded-lg hover:brightness-90"
        onClick={loginReq}
      >
        로그인
      </Button>
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
};

export default LoginForm;
