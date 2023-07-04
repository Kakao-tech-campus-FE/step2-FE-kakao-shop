import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../apis/api";
const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username:"",
    email:"",
    password:"",
    passwordConfirm:"",
  })
  return (
    <Container>
      <Title>회원가입 페이지</Title>
      <InputGroup id="username" type="text" placeholder="사용자 이름" label="이름" value={value.username} onChange={handleOnChange}/>
      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" value={value.email} onChange={handleOnChange}/>
      <InputGroup id="password" type="password" placeholder="비밀번호"  label="비밀번호" value={value.password} onChange={handleOnChange}/>
      <InputGroup id="passwordConfirm" type="password" placeholder="비밀번호 확인"  label="비밀번호 확인" value={value.passwordConfirm} onChange={handleOnChange}/>
      <Button
        onClick={() => {
          register({
            email:value.email,
            username: value.username,
            password: value.username
          })
        }}>회원가입</Button>
    </Container>
  );
}

export default RegisterForm;