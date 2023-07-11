import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
// import { useState } from "react";
import useInput from "../../hooks/useInput";
import { login } from "../../services/user";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setEmail } from "../../store/slices/userSlice";
import React, {useState} from 'react';
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const email = useSelector((state) => state.user.email);
 
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

 
  const [message, setMessage] = useState('');

  // login error value
  const [error, setError] = useState("");

  // handle for login
  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await login({ email, password }); //use apis and recieve response
      const user = response.data;
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; //expiration time setting, 60min
      user.expirationTime = expirationTime;
      user.email = value.email;

      dispatch(setUser(user)); // redux, exec setUser , store expirationTime, email
      localStorage.setItem("user", JSON.stringify(user)); // save at localStorage
      navigate("/"); // login success then go to home
    } catch (error) {
      setError("로그인에 실패했습니다.");
    }
  };


  return (
  <Container>
    <Title>
      로그인
    </Title>
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
          handleLogin({
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