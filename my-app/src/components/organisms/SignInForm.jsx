import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest, setUserInfo } from "../../store/slices/userSlice";
import { useState } from "react";
import Label from "../atoms/Label";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(true);
  const [message, setMessage] = useState("");

  const style = {
    backgroundColor: "#ffe342",
    border: "none",
    borderRadius: "8px",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    display: "inline-block",
    margin: "10px 0px",
    cursor: "pointer",
  };

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

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
        style={style}
        onClick={() => {
          dispatch(
            loginRequest({
              email: value.email,
              password: value.password,
            })
          );
        }}
      >
        로그인
      </Button>
      <Button
        style={style}
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
      <Label style={{ color: "red" }}>{message}</Label>
    </Container>
  );
};

export default SignInForm;
