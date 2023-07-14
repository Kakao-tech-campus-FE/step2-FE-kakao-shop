import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/users";
import { setUser } from "../../store/slices/userSlice";

import "../../styles/organisms/LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // use customhook : (useInput)
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  // login error value
  const [error, setError] = useState("");

  // handle for login
  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await login({ email, password }); //use apis and recieve response
      const user = response.data;
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; //expiration time setting, 60min
      user.expirationTime = expirationTime;
      user.email = value.email;

      dispatch(setUser(user)); // redux, exec setUser , store expirationTime, email
      localStorage.setItem("user", JSON.stringify(user)); // save at localStorage
      navigate("/"); // login success then go to home
    } catch (error) {
      setError("로그인에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********."
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={handleLogin({
          email: value.email,
          password: value.password,
        })}
      >
        로그인
      </Button>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default LoginForm;
