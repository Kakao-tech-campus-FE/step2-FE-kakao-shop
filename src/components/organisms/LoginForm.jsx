import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice";
import { login } from "../../services/user";
import { useState } from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const {
    value,
    emailError,
    passwordError,
    handleChange,
    validateEmail,
    validPassword,
  } = useInput({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const isError = emailError || passwordError;

  const loginRequirement = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setEmail({
            email: value.email,
          })
        );
        navigate(staticServerUri + "/");
      })
      .catch((err) => {
        console.log("err", err);

        if (err.data && err.data.error && err.data.error.message) {
          setError(`Error 발생${err.data.error.message} :(`);
        } else {
          setError("로그인에 실패했습니다.");
        }
      });
  };

  return (
    <Container>
      <div>
        <Title>로그인</Title>
        <span>{email}</span>
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

        <div>{error}</div>

        <Button
          disabled={isError}
          onClick={() => {
            loginRequirement();
          }}
        >
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default LoginForm;
