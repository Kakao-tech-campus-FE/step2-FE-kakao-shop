import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import React from "react";
import { login } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setEmail, logOut } from "../../store/slices/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // 이메일 가져오기
  const email = useSelector((state) => state.user.email);

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
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Container>
      <Link to="/">
        <Title>Main page로</Title>
      </Link>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // api 로그인 요청
          loginReq();
        }}
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        임시로 로컬스토리지 지우는 버튼
      </Button>
    </Container>
  );
};

export default LoginForm;
