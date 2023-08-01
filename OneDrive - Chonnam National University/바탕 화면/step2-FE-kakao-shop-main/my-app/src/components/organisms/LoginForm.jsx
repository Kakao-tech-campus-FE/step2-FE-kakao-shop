import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import React, { useState } from "react"; // eslint-disable-line no-unused-vars
// import { login } from "../../services/user";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { loginRequest, logOut } from "../../store/slices/userSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const [setErrorMsg] = useState("");

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