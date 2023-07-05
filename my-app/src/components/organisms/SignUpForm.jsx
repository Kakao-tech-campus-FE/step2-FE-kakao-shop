import Inner2 from "../atoms/Inner2";
import Inner1 from "../atoms/Inner1";
import Title from "../atoms/Title";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";

import useInput from "../../hooks/useInput";
import { signup } from "../../services/api";

const SignUpForm = () => {
  const [username, setUsername, isValidUsername, usernameMessage] = useInput(
    "",
    (value) => /^[a-zA-Z가-힣]{1,}$/.test(value)
  );
  const [email, setEmail, isValidEmail, emailMessage] = useInput("", (value) =>
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(value)
  );
  const [password, setPassword, isValidPassword, passwordMessage] = useInput(
    "",
    (value) =>
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/.test(value)
  );
  const [
    passwordConfirm,
    setPasswordConfirm,
    isValidPasswordConfirm,
    passwordConfirmMessage,
  ] = useInput("", (value) => value === password);

  const isFormValid =
    isValidUsername &&
    isValidEmail &&
    isValidPassword &&
    isValidPasswordConfirm;

  return (
    <Inner2>
      <Inner1>
        <Title>가입을 시작합니다!</Title>
        <InputGroup
          id="username"
          name="username"
          placeholder="이름"
          type="text"
          value={username}
          onChange={setUsername}
          error={!isValidUsername}
          errorMessage={usernameMessage}
        />
        <InputGroup
          id="email"
          name="email"
          placeholder="이메일"
          type="email"
          value={email}
          onChange={setEmail}
          error={!isValidEmail}
          errorMessage={emailMessage}
        />
        <InputGroup
          id="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={setPassword}
          error={!isValidPassword}
          errorMessage={passwordMessage}
        />
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          error={!isValidPasswordConfirm}
          errorMessage={passwordConfirmMessage}
        />
        <Button
          disabled={!isFormValid}
          onClick={() => {
            signup({ username, email, password });
          }}
        >
          회원가입
        </Button>
      </Inner1>
    </Inner2>
  );
};

export default SignUpForm;
