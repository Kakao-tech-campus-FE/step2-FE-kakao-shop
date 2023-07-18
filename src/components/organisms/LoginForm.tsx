import FilledButton from '@components/atoms/button/FilledButton';
import React, { useState, useEffect } from 'react';
import useInput from '@hooks/useInput';
import { checkEmail, checkPassword } from '@utils/validationUtils';
import { useDispatch } from 'react-redux';
import { loginStore } from '@store/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import login from '@api/loginApi';
import { Card } from '@mui/material';
import Title from '@components/atoms/Title';
import InputGroup from '../molecules/InputGroup';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailHT, setEmailHT] = useState('');
  const [passwordHT, setPasswordHT] = useState('');
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      email: '',
      password: '',
    },
  });
  const loginReq = () => {
    login({ email: inputInfo.email, password: inputInfo.password })
      .then((res) => {
        dispatch(loginStore({ isLoggedIn: true, email: inputInfo.email }));
        navigate('/');
      })
      .catch((err) => {
        setEmailHT('아이디를 잘못 입력했습니다.');
      });
  };

  const validationCheck = () => {
    setEmailHT(checkEmail(inputInfo.email));
    setPasswordHT(checkPassword(inputInfo.password));
  };

  useEffect(() => {
    validationCheck();
  }, [inputInfo]);

  useEffect(() => {
    setEmailHT('');
    setPasswordHT('');
  }, []);

  return (
    <>
      <Title>Login</Title>
      <Card>
        <div className="flex flex-col space-y-2 mx-[100px] mt-[20px] mb-[50px]">
          <InputGroup
            inputName="email"
            labelName="이메일"
            value={inputInfo.email}
            helperText={emailHT}
            onChange={handleOnChange}
          />
          <InputGroup
            inputName="password"
            labelName="비밀번호"
            inputType="password"
            value={inputInfo.password}
            helperText={passwordHT}
            onChange={handleOnChange}
          />
          <Link to="/register" className="text-sm text-middleGray">
            회원가입 페이지로
          </Link>
          <FilledButton onClick={loginReq}>로그인</FilledButton>
        </div>
      </Card>
    </>
  );
};

export default LoginForm;
