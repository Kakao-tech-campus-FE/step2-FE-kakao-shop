import useInput from '../../hooks/useInput';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import { login } from '../services/api';

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    password: "",
  });

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
        login({
          username: value.username,
          password: value.password,
        });
        }}>로그인</Button>
    </Container>
  );
};

export default LoginForm;