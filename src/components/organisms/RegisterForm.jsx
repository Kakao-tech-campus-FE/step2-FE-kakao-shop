import Container from "../atoms/Container";
import InputGroup from "../moleclules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  return (
    <Container>
      <InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        label="이메일(아이디)"
        value={value.email}
        onChange={handleOnChange}
      ></InputGroup>
      <InputGroup
        id="username"
        name="username"
        type="text"
        placeholder="이름"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      ></InputGroup>
      <InputGroup
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      ></InputGroup>
      <InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      ></InputGroup>
      <Button
        onClick={(e) => {
          // API 회원가입 요청
          console.log("회원가입");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
