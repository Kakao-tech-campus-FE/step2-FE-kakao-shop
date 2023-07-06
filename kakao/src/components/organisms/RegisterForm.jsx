import Container from "../atoms/Conatiner";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/api";
import useInput from "../../hooks/useInput";

// hook으로
const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <Container>
      <InputGroup
        id="username"
        name="username"
        type="text"
        placeholder="사용자 이름을 입력하세요."
        label="이름"
        value={value.username} //{username}
        onChange={handleOnChange} //(e)=> { setUsername(e.target.value)}
      />
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
      <InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="**********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          //api 회원가입 요청
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
