import Container from "../atoms/Conatiner";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/api";
import Title from "../atoms/Title";

// hook으로
const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일(아이디)를 입력하세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        name="password"
        type="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />

      <Button
        onClick={() => {
          //api 로그인 요청
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
