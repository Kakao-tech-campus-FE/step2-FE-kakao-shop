import { login } from "../../apis/api";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Title from "../atoms/Title";
import InputGroup from "../moleclules/InputGroup";

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
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
      <Button
        onClick={() => {
          // API 로그인 요청
          login({
            email: value.email,
            password: value.password,
          });
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default LoginForm;
