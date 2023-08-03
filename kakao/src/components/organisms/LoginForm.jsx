import Container from "../atoms/Conatiner";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/user";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const staticServerUrl = process.env.REACT_APP_PATH || "";
// hook으로
const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const {
    value,
    handleOnChange,
    validateEmail,
    validatePassword,
    emailError,
    pwError,
  } = useInput({
    email: "",
    password: "",
  });

  const loginReq = () => {
    if (emailError || pwError) {
      return;
    }

    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        console.log(res);
        // const token = res.data.token;
        const token = res.headers.authorization;
        localStorage.setItem("token", token);
        dispatch(
          setEmail({
            email: value.email,
          })
        );
        navigate(staticServerUrl + "/");
      })
      .catch((err) => {
        console.log("err", err);

        if (err.data && err.data.error && err.data.error.message) {
          setError(err.data.error.message);
        } else {
          setError("인증되지 않은 로그인");
        }
      });
  };

  return (
    <div className="form-wrapper">
      <Container>
        <Title>로그인</Title>
        <span>{email}</span>
        <div className="InputGroups">
          <InputGroup
            id="email"
            name="email"
            type="email"
            placeholder="이메일(아이디)를 입력하세요."
            label="이메일"
            value={value.email}
            onChange={handleOnChange}
            onBlur={validateEmail}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <InputGroup
            id="password"
            name="password"
            type="password"
            placeholder="**********"
            label="비밀번호"
            value={value.password}
            onChange={handleOnChange}
            onBlur={validatePassword}
          />
          {pwError && <p className="error-message">{pwError}</p>}
          {error}
        </div>
        <Button onClick={loginReq}>로그인</Button>
        <Button
          onClick={() => {
            navigate(staticServerUrl + "/signup");
          }}
        >
          회원가입
        </Button>
      </Container>
    </div>
  );
};

export default LoginForm;
