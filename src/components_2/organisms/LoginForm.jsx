import React from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { login } from '../../services';
import Title from '../atoms/Title';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../store/slices/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { value, handleOnChange, loading } = useInput({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((response) => {
        // 로그인 성공 시 처리할 로직 추가
        console.log(response);
        dispatch(setEmail({ email: value.email }));
      })
      .catch((error) => {
        // 로그인 실패 시 처리할 로직 추가
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="*******"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </Container>
  );
};

export default LoginForm;

