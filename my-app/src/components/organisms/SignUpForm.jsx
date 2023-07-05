import Container from "../atoms/Container";
import SignUpInputGroup from "../molecules/SignUpInputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/loginAPI";
import { useEffect } from "react";

const SignUpForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <Container>
      <SignUpInputGroup
        id="username"
        type="text"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
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
      <SignUpInputGroup
        id="password"
        type="password"
        placeholder="**"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
        id="passwordConfirm"
        type="password"
        placeholder="**"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // 회원가입 요청
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

export default SignUpForm;
