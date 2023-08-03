import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    )
      .then((res) => {
        // 응답 데이터를 이용하여 로그인 성공 여부를 확인하고, 처리
        if (res.success) {
          // 로그인 성공 시 '/' 경로로 이동
          alert("로그인 성공!");
          navigate("/");
        } else {
          // 로그인 실패 시 에러 메시지 출력 또는 다른 처리
          alert("로그인 실패. 다시 시도해주세요.");
        }
      })
      .catch((error) => {
        // 에러 처리
        alert("로그인 요청에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요"
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
      <Button onClick={handleLogin}>로그인</Button>
    </Container>
  );
};

export default LoginForm;
