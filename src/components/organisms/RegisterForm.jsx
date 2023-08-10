import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    value,
    emailError,
    passwordError,
    handleChange,
    validateEmail,
    validPassword,
  } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState("");
  const isPasswordCorrect = value.password === value.passwordConfirm;
  const isError = emailError || passwordError || !isPasswordCorrect;

  const registerRequirement = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((res) => {
        console.log(res);
        navigate(staticServerUri + "/");
      })
      .catch((err) => {
        console.log("err", err);
        if (err.data && err.data.error && err.data.error.message) {
          setError(`Error 발생${err.data.error.message} :(`);
        } else {
          setError("회원가입에 실패했습니다.");
        }
      });
  };

  return (
    <Container>
      <div>
        <Title>회원가입</Title>
        <InputGroup
          id="username"
          type="text"
          name="username"
          placeholder="사용자의 이름을 입력해주세요"
          label="이름"
          value={value.username}
          onChange={handleChange}
        />
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          label="이메일"
          value={value.email}
          onChange={handleChange}
          onBlur={validateEmail}
        />
        {emailError && <div>{emailError}</div>}
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="********"
          label="비밀번호"
          value={value.password}
          onChange={handleChange}
          onBlur={validPassword}
        />
        {passwordError && <div>{passwordError}</div>}
        <InputGroup
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="********"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleChange}
        />
        {!isPasswordCorrect && <div>비밀번호와 비밀번호 확인이 다릅니다.</div>}
        <div>{error}</div>
        <Button
          disabled={isError || !value.password || !value.passwordConfirm}
          onClick={() => {
            registerRequirement();
          }}
        >
          회원가입
        </Button>
      </div>
    </Container>
  );
};

export default RegisterForm;
