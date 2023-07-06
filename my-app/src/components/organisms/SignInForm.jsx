import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import { login } from "../../services/loginAPI";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
        onClick={() => {
          // 회원가입 요청
          login({
            email: value.email,
            password: value.password,
          });
        }}
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default SignInForm;
