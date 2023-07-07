import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import { login } from "../../services/loginAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/slices/userSlice";
import { useState } from "react";
import Label from "../atoms/Label";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(true);
  const [message, setMessage] = useState("");

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
        setCorrect(true);
        setMessage("");
        dispatch(
          setUserInfo({
            email: value.email,
            isLogined: true,
          })
        );
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        let errorMessage = err.response.data.error.message;
        errorMessage = errorMessage.slice(0, errorMessage.indexOf(":"));
        setMessage(errorMessage);
        setCorrect(false);
        dispatch(
          setUserInfo({
            email: value.email,
            isLogined: false,
          })
        );
      });
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <SignInInputGroup
        id="email"
        type="email"
        placeholder="이메일"
        label=""
        value={value.email}
        onChange={handleOnChange}
        className={correct ? "black" : "red"}
      />
      <SignInInputGroup
        id="password"
        type="password"
        placeholder="비밀번호"
        label=""
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // 회원가입 요청
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
      <Label>{message}</Label>
    </Container>
  );
};

export default SignInForm;
