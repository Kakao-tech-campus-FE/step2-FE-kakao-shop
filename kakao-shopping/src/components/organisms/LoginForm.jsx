import Container from "../atoms/Container";
import InputGroup from "../atoms/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/api";

const LoginForm = () => {
  const { value, handleOnchange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)"
        label="이메일"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="******"
        label="비밀번호"
        onChange={handleOnChange}
      />

      <Button
        onClick={() => {
          login({
            email: value.email,
            password: value.password,
          });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default LoginForm;
