// RegisterForm.jsx

import React from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import Title from '../atoms/Title';

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/join', {
        email: value.email,
        password: value.password,
        username: value.username,
      });

      // 회원 가입 성공 시 처리 로직
      console.log('회원 가입 성공:', response.data);

      // 로컬 스토리지에 회원 정보 저장
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    } catch (error) {
      // 회원 가입 실패 시 처리 로직 작성
      console.error('회원 가입 실패:', error.response.data.error);
    }
  };

  return (
    <Container className="register-container">
      <Title>회원가입</Title>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value?.username}
        onChange={handleOnChange}
      />
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
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="**********"
        label="비밀번호 확인"
        value={value?.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;

