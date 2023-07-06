import useInput from '../../hooks/useInput';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';

const LoginForm = () => {
  const { value, handleOnChange, handleOnClick } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <InputGroup
        id="email"
        type="text"
        name="email"
        placeholder="이메일"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호 입력"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          handleOnClick("login", value)
        }}>로그인</Button>
    </Container>
  );
};

export default LoginForm;