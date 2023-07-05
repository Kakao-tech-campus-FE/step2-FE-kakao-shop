import React from 'react';
import SubContainer from '../components/atoms/SubContainer';
import KaKaoLogo from '../components/atoms/KaKaoLogo';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage = () => {
  return (
    <SubContainer>
      <KaKaoLogo />
      <LoginForm />
    </SubContainer>
  );
};

export default LoginPage;
