import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { signIn } from "../../services/api.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Button {
    margin-top: 1.5rem;
  }
`;

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

const passwordRegEx = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [password, setPassword] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");

  const emailCheck = (email) => {
    return emailRegEx.test(email) ? "" : "이메일 형식이 아닙니다.";
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setEmailErrorMsg(emailCheck(email));
  };

  const pwCheck = (password) => {
    return passwordRegEx.test(password)
      ? ""
      : "영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.";
  };

  const handlePwCheck = (e) => {
    const password = e.target.value;
    setPassword(password);
    setPwErrorMsg(pwCheck(password));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      email: value.email,
      password: value.password,
      username: value.username,
    };
    signIn(data)
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
          dispatch({ type: "changeState" });
          localStorage.setItem("userInfo", JSON.stringify(data));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form>
        <InputGroup
          id="email"
          name="email"
          type="email"
          value={value.email}
          placeholder="이메일"
          onChange={(e) => {
            handleOnChange(e);
            handleEmailChange(e);
          }}
        >
          {["", emailErrorMsg]}
        </InputGroup>
        <InputGroup
          id="password"
          name="password"
          type="password"
          value={value.password}
          placeholder="비밀번호"
          onChange={(e) => {
            handleOnChange(e);
            handlePwCheck(e);
          }}
        >
          {["", pwErrorMsg]}
        </InputGroup>
        <Button
          type="submit"
          styles={{
            width: "32rem",
            padding: "0.6rem",
            backgroundColor: "yellow",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
          onClick={handleSubmit}
        >
          로그인
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
