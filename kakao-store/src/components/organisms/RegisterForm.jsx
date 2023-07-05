import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import { validateForm } from "../atoms/VaildationSignup";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/api";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  // const [username, setUsername] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [passwordConfirm, setPasswordConfirm] = useState()
  // 등 4개가 있어야 하는걸 hook을 사용하여 1개로 줄임

  return (
    <Container>
      <Title>회원가입</Title>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력하세요"
        label="이름 "
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력하세요"
        label="이메일 "
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        label="비밀번호 "
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="********"
        label="비밀번호 확인 "
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        //에러케칭 후 해당하는 InputGroup의 밑에 해당 에러의Label을 추가
        onClick={() => {
          if (!validateForm(value)) {
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            });

            navigate("/");
          }
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
