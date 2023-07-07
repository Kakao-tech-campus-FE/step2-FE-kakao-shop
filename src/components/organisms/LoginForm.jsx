import { useState } from "react";
import { login } from "../../apis/api";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import InputGroup from "../moleclules/InputGroup";
import Box from "../atoms/Box";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

const LoginForm = () => {
  // form value state
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  // 로그인 에러 state
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 엔터키로 로그인 가능하도록하는 핸들러
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      loginReq();
    }
  };

  // 로그인 API 요청
  const loginReq = () => {
    // 이메일이 빈 상태
    if (value.email === "") {
      setLoginStatus("emptyEmail");
    }
    // 비밀번호가 빈 상태
    else if (value.password === "") {
      setLoginStatus("emptyPw");
    } else {
      login({
        email: value.email,
        password: value.password,
      }).then((res) => {
        setLoginStatus(res.message);
        // 로그인에 성공한 경우
        if (res.message === "complete") {
          dispatch(setUser({ email: value.email, token: res.token }));
          navigate("/", { replace: true });
        }
      });
    }
  };

  // 로그인 상태에 따른 에러 메세지 출력
  const statusBox = () => {
    let statusMessage = "";
    if (loginStatus === "emptyEmail") {
      statusMessage = "이메일을 입력해 주세요.";
    } else if (loginStatus === "emptyPw") {
      statusMessage = "비밀번호를 입력해 주세요.(영문자/숫자/특수문자)";
    } else if (loginStatus === "notVerified") {
      statusMessage =
        "이메일 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
    } else {
      return null;
    }
    return (
      <Box className="mt-6 bg-[#fafafa] p-5 text-[13px] text-red-500">
        {statusMessage}
      </Box>
    );
  };
  return (
    <>
      <Title></Title>
      <Container>
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="이메일"
          label="이메일(아이디)"
          form="login"
          value={value.email}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        ></InputGroup>
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          label="비밀번호"
          form="login"
          value={value.password}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        ></InputGroup>
        {statusBox()}
        <Button className={"mt-10"} onClick={loginReq}>
          로그인
        </Button>
        <Link to="/signup" className="mt-5 text-xs ">
          회원가입
        </Link>
      </Container>
    </>
  );
};

export default LoginForm;
