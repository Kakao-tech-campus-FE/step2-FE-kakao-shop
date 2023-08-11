import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroups";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/api";
import { useEffect } from "react";

const RegisterForm = () => {
import InputGroup from "../atoms/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {
  const [value, handleOnchange]= useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    onChange={handleOnChange},
  });
  
  const [form, setForm] = useState
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // const [form, setForm] = useState;

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  return (
    <Container>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)"
        label="이메일"
        value={value.email}
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        name= "password"
        placeholder="비밀번호"
        label="비밀번호"
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // api 회원 가입 요청
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
