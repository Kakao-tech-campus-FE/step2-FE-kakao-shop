import React from 'react';
import SignupForm from '../components/Auth/organisms/SignupForm';
import { styled } from 'styled-components';
import logoKakaoText from '../assets/logoKakaoText.png';
import useIsNotAuth from '../hooks/useIsNotAuth';

function Signup() {
  useIsNotAuth();
  return (
    <Wrap>
      <Img src={logoKakaoText} width={100} height={40} alt="카카오" />
      <SignupForm />
    </Wrap>
  );
}

export default Signup;

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
