import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import InputGroup from "../moleclules/InputGroup";
import Box from "../atoms/Box";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";

const LoginForm = () => {
  // user 전역 상태 관련
  const email = useSelector((state) => state.user.email);
  const isError = useSelector((state) => state.user.error);
  const isLoading = useSelector((state) => state.user.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // input, loginError 상태
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  // 로그인 요청
  const loginReq = () => {
    if (value.email === "") {
      setLoginError("이메일을 입력해 주세요.");
    } else if (value.password === "") {
      setLoginError("비밀번호를 입력해 주세요.(영문자/숫자/특수문자)");
    } else {
      dispatch(
        loginRequest({
          email: value.email,
          password: value.password,
        })
      );
    }
  };

  // 엔터키 로그인
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      loginReq();
    }
  };

  // 로그인 상태에 따른 응답
  useEffect(() => {
    if (email !== null) {
      navigate("/", { replace: true });
      window.location.reload(false);
    }
    if (isError === true) {
      setLoginError(
        "이메일 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요."
      );
    }
  }, [email, navigate, isError]);

  return (
    <>
      <Title></Title>
      <Container type={"form"}>
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
        {loginError && (
          <Box className="mt-6 bg-[#fafafa] p-5 text-[13px] text-red-500">
            {loginError}
          </Box>
        )}
        <Button className={"mt-10"} onClick={loginReq} isLoading={isLoading}>
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
