import { useNavigate } from 'react-router-dom'
import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import Title from "../atoms/Title"
import { useDispatch, useSelector } from "react-redux"
import { loginRequest } from "../../store/slices/userSlice"

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state) => state.user.email)

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
          navigate('/') // 로그인 성공 시 홈페이지로 리다이렉트
        }
      })
      .catch((error) => {
        console.log('로그인 실패:', error)
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
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
