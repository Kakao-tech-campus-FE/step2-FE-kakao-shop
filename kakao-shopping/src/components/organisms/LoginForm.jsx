import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../apis/api";
import Title from "../atoms/Title";
const LoginForm = () => {
  const [value, handleOnChange] = useInput({
    email:"",
    password:"",
  })
  return (
    <Container>
      <Title>로그인 페이지</Title>
      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" value={value.email} onChange={handleOnChange}/>
      <InputGroup id="password" type="password" placeholder="비밀번호"  label="비밀번호" value={value.password} onChange={handleOnChange}/>
      <Button
        onClick={() => {
          login({
            email:value.email,
            password: value.username
          })
        }}>회원가입</Button>
    </Container>
  );
}

export default LoginForm;