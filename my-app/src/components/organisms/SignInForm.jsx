import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/loginAPI";

const SignInForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <SignInInputGroup
        id="email"
        type="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          console.log("email");
        }}
      >
        이메일 확인
      </Button>
      <SignInInputGroup
        id="password"
        type="password"
        placeholder="**"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // 회원가입 요청
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

export default SignInForm;
