import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
// import { useState } from "react";
import useInput from "../../hooks/useInput";
import { emailDuplicateCheck, login } from "../../services/api";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setEmail } from "../../store/slices/userSlice";
import React, {useState} from 'react';


const LoginForm = () => {

  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
 
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

 
  const [message, setMessage] = useState('');

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
      placeholder="이메일(아이디)을 입력해주세요." 
      label="이메일"
      value={value.email}
      onChange={handleOnChange}

    />
      
    <InputGroup 
      id="password" 
      type="password"
      name="password" 
      placeholder="*********" 
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
  </Container>
  );
};

export default LoginForm;