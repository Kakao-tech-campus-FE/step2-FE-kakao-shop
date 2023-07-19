import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { setEmail } from '../../store/slices/userSlice';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { loginRequest } from '../../store/slices/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  const {value, handleOnChange} = useInput({
    email: "",
    password: "",
  });   

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // 로그인 상태일 때 자동으로 이동
      navigate('/');
    }
  }, [navigate]);
  
  const goRegister = () => {
    navigate('/signup');
  }

  return (
  <Container>
    <Title>
      로그인
    </Title>
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
      placeholder="**********"
      label="비밀번호"
      value={value.password}
      onChange={handleOnChange}
    />
    <Button
      onClick={() => {
        dispatch(
          loginRequest({
            email: value.email,
            password: value.password,
          })
        );
      }}
    >로그인</Button>
    <p>
      <a href='#' onClick={goRegister}>
        회원가입
      </a>
    </p>
  </Container>
  );
}

export default LoginForm;