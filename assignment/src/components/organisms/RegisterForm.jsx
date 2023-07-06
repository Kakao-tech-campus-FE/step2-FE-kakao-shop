import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from '../../hooks/useInput';

const RegisterForm = () => {
  const { value, handleOnchange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  return (
    <Container>
      <InputGroup
        id="username"
        type="text"
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        value={value.username}
        onChange={handleOnchange}
      />

      <InputGroup
        id="email"
        type="email"
        placeholder="이메일(아이디) 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleOnchange} />
      <InputGroup
        id="password"
        type="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={handleOnchange} />
      <InputGroup
        id="passwordConfirm"
        type="password"
        placeholder="**********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnchange} />
      <Button onClick={() => {
        // api 요청
      }}>회원가입</Button>
    </Container>
  )
}

export default RegisterForm;