import React from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import Title from '../atoms/Title';

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: value.email,
        password: value.password,
      });

      // 로그인 성공 시 처리 로직
      console.log('로그인 성공:', response.data);

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      // 로그인 실패 시 처리 로직 작성
      console.error('로그인 실패:', error.response.data.error);
    }
  };

  return (
    <Container className="login-container">
      <Title>로그인</Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value?.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value?.password}
        onChange={handleOnChange}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </Container>
  );
};

export default LoginForm;


