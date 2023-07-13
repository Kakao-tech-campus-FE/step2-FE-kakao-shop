import React from 'react';
import LoginForm from '../components/Auth/organisms/LoginForm';
import logoKakaoText from '../assets/logoKakaoText.png';
import { styled } from 'styled-components';
import useIsNotAuth from '../hooks/useIsNotAuth';

function Login() {
  useIsNotAuth();
  return (
    <Wrap>
      <Img src={logoKakaoText} width={100} height={40} alt="카카오" />
      <LoginForm />
    </Wrap>
  );
}

export default Login;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Img = styled.img`
  margin-bottom: 20px;
`;
