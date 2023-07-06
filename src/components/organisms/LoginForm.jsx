import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/api";
import Title from "../atoms/Title";
import { setEmail } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  // 사용자 정보를 store에 저장 : dispatch를 사용하기 위해 useDispatch;
  const dispatch = useDispatch();
  // 사용자 정보를 store로 부터 불러오기 : useSelector를 사용하기 위해
  // 아래 코드의 state는 글로벌 상태를 모두 담고 있는 최상위 state
  const email = useSelector((state) => state.user.email);

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
        // dispatch를 이용하여 store에 email을 저장
        dispatch(
          setEmail({
            email: value.email,
          })
        );
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id={"email"}
        type={"email"}
        name={"email"}
        placeholder={"이메일(아이디)"}
        label={"이메일"}
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id={"password"}
        type={"password"}
        name={"password"}
        placeholder={"********"}
        label={"비밀번호"}
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // api 로그인 요청
          loginReq();
        }}
      >
        로그인
      </Button>
    </Container>
  );
};
export default LoginForm;
