import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import Button from "./../atoms/Button";
import useInput from "./../../hooks/useInput";
import Title from "../atoms/Title";
import { login } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

// import { useEffect } from "react"; // useEffect는 오류가 발생하는 구간을 확인하는데 유용하다.

const LoginForm = () => {
  // reducer 함수를 호출하기 위해서는 dispatch를 호출해야한다!(규칙)
  const dispatch = useDispatch();

  // redux에서 값을 가져올때는 useSelector라는 훅을 사용한다.
  // 여기에서 사용하는 state는 모든 변수를 다담고 있는 state이다.
  // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다!
  const email = useSelector((state) => state.user.email);

  const [value, handleOnChange] = useInput({
    email: "",
    password: "",
  });

  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        console.log(res);

        // dispatch의 reducer함수를 통해 넣는 값이 payload가 된다.
        // 정상적으로 참조할 수 있도록 객체 형태로 email이라는 키에 대한 값을 넣어준다.
        dispatch(setEmail({
          email: value.email,
        }))
      })
      .catch((err) => {
        console.log("err", err);
      })
  }

  return (
    <>
      <Container>
        <Title></Title>
        <span>{email}</span>
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
            loginReq({
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
