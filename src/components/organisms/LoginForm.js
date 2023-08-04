
import { Link } from "react-router-dom";
import useInput from '../../hooks/useInput';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';

const staticServerUri = process.env.REACT_APP_PATH || "";

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
        className="primary"
        onClick={() => { handleOnClick("login") }}>
        로그인
      </Button>
      <Link to={staticServerUri + "/signup"}>
        <Button>회원가입</Button>
      </Link>

    </Container>
  );
};

export default LoginForm;