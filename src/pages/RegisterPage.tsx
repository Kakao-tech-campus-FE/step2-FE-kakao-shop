import React from 'react';
import SubContainer from '../components/atoms/SubContainer';
import KaKaoLogo from '../components/atoms/KaKaoLogo';
import RegisterForm from '../components/organisms/RegisterForm';

const RegisterPage = () => {
  return (
    <SubContainer>
      <KaKaoLogo />
      <RegisterForm />
    </SubContainer>
  );
};

export default RegisterPage;
