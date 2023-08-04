import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import useInput from "../../hooks/useInput";
import Container from "../atoms/Container"; // eslint-disable-line no-unused-vars
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

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
      .then((res) => { // eslint-disable-line no-unused-vars
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg(error.toString());
      });
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border p-16 grid gap-8">
      <Link to="/">
        <img
          src="/logoKakao.png"
          alt="카카오톡 쇼핑하기"
          className="w-32 block m-auto"
        />
      </Link>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        value={value.email}
        onChange={handleOnChange}
        className="w-96 h-10 border-b-2 border-b-gray focus:outline-none focus:border-b-2 focus:border-b-black "
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
        className="w-96 h-12 bg-yellow-300 rounded-lg hover:brightness-90"
        onClick={loginReq}
      >
        로그인
      </Button>
      {errorMsg && <div>{errorMsg}</div>}
      <Link to="/signup" className="block m-auto">
        회원가입
      </Link>
    </div>
  );
};

export default LoginForm;