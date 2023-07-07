import { useState } from "react";
import { login } from "../../apis/api";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import InputGroup from "../moleclules/InputGroup";
import Box from "../atoms/Box";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (value.email === "") {
      setLoginStatus("emptyEmail");
    } else if (value.password === "") {
      setLoginStatus("emptyPw");
    } else {
      login({
        email: value.email,
        password: value.password,
      }).then((res) => {
        setLoginStatus(res);
        if (res === "complete") {
          navigate("/", { replace: true });
        }
      });
    }
  };

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
    <Container>
      <Title></Title>
      <InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        label="이메일(아이디)"
        form="login"
        value={value.email}
        onChange={handleOnChange}
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
      ></InputGroup>
      {statusBox()}
      <Button className={"mt-10"} onClick={handleLogin}>
        로그인
      </Button>
      <Link to="/signup" className="mt-5 text-xs ">
        회원가입
      </Link>
    </Container>
  );
};

export default LoginForm;
