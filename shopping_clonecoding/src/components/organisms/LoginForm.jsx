import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/api";
import { setUser } from "../../store/slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await login({ email, password });
      const user = response.data;
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      user.expirationTime = expirationTime;

      dispatch(setUser(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
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
        onClick={() => {
          handleLogin({
            email: value.email,
            password: value.password,
          });
        }}
      >
        로그인
      </Button>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default LoginForm;
