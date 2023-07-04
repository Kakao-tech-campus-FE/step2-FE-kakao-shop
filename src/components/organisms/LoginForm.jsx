import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import Button from "./../atoms/Button";
import useInput from "./../../hooks/useInput";
import Title from "../atoms/Title";
import { login } from "../services/api";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

// import { useEffect } from "react"; // useEffect는 오류가 발생하는 구간을 확인하는데 유용하다.

const LoginForm = () => {
  const [value, handleOnChange] = useInput({
    email: "",
    password: "",
  });

  return (
    <>
    <Title></Title>
      <Container>
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일(아이디)를 입력해주세요."
          label="이메일"
          value={value.email}
          onChange={handleOnChange}
        />
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="********"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
        <Button
          onClick={() => {
            // api 로그인 요청 - fetch 혹은 axios
            login({
              email: value.email,
              password: value.password,
            })
          }}
        >
          로그인
        </Button>
      </Container>
    </>
  );
};

export default LoginForm;
