import React, { useState } from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <Container>
      <InputGroup 
        id="username" 
        type="text" 
        placeholder="사용자 이름을 입력해주세요." 
        label="이름" 
        onChange={(e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        }}
      />
      <InputGroup id="email" type="email" placeholder="이메일(아이디)를 입력해주세요." label="이메일" 
      onChange={(e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      }}/>
      <InputGroup id="password" type="password" placeholder="**********" label="비밀번호" onChange={(e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        }}/>
      <InputGroup id="passwordConfirm" type="password" placeholder="*********" label="비밀번호 확인" onChange={(e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        }}/>
      <Button
        onClick={() => {
          // api 회원 가입 요청
        }}
        >회원가입</Button>
    </Container>
  )
};

export default RegisterForm;