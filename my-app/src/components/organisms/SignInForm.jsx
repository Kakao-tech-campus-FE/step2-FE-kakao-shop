import Inner2 from "../atoms/Inner2";
import Inner1 from "../atoms/Inner1";
import Title from "../atoms/Title";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { signin } from "../../services/api";

const SignInForm = () => {
  const [email, setEmail, isValidEmail, emailMessage] = useInput("", (value) =>
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(value)
  );
  const [password, setPassword, isValidPassword, passwordMessage] = useInput(
    "",
    (value) =>
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/.test(value)
  );

  const isFormValid = isValidEmail && isValidPassword;

  return (
    <Inner2>
      <Inner1>
        <Title>로그인</Title>
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
        <Button
          disabled={!isFormValid}
          onClick={() => {
            signin({ email, password });
          }}
        >
          로그인
        </Button>
      </Inner1>
    </Inner2>
  );
};

export default SignInForm;
