import { useDispatch } from "react-redux"
import { loginRequest, setUser } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom"
import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import Title from "../atoms/Title"

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    )
      .unwrap()
      .then((response) => {
        if (response.success) {
          dispatch(setUser(response.user)); // 사용자 정보 상태 업데이트
          navigate("/") // 로그인 성공 시 홈페이지로 리다이렉트
        }
      })
      .catch((error) => {
        console.log("로그인 실패:", error)
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
  )
}

export default LoginForm
