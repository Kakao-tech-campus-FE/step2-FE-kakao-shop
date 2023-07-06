import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';

const RegisterForm = () => {
  return (
    <Container>
      <InputGroup id="username" type="text" placeholder="사용자 이름" />
      <InputGroup id="email" type="email" placeholder="이메일(아이디)" />
      <InputGroup id="password" type="password" placeholder="비밀번호" />
      <InputGroup id="passwordConfirm" type="password" placeholder="비밀번호 확인" />
      <Button>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;
