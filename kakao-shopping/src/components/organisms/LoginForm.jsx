import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroups";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/api";
import Title from "../atoms/Title";
import { setEmail } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user(email));

  const { value, handleOnChange } = useInput({
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
        dispatch(
          setEmail({
            email: value.email,
          })
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)"
        label="이메일"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="******"
        label="비밀번호"
        onChange={handleOnChange}
      />

      <Button
        onClick={() => {
          loginReq({
            email: value.email,
            password: value.password,
          });
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default LoginForm;
