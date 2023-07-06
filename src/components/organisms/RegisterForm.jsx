import Container from "../atoms/Container";
import InputGroup from "../moleclules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../apis/api";
import useValid from "../../hooks/useValid";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const { valid, handleOnBlur } = useValid(
    {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    value
  );

  return (
    <Container>
      <Title></Title>
      <InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일 입력"
        label="이메일(아이디)"
        form="register"
        valid={valid}
        value={value.email}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></InputGroup>
      <InputGroup
        id="username"
        name="username"
        type="text"
        placeholder="이름 입력"
        label="이름"
        form="register"
        valid={valid}
        value={value.username}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></InputGroup>
      <InputGroup
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호 입력"
        label="비밀번호"
        form="register"
        valid={valid}
        value={value.password}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></InputGroup>
      <InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 재입력"
        label="비밀번호 확인"
        form="register"
        valid={valid}
        value={value.passwordConfirm}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      ></InputGroup>
      <Button
        valid={valid}
        onClick={() => {
          // api 회원가입 요청
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
