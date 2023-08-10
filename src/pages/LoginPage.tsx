import React from 'react';
import { Link } from 'react-router-dom';
import SubContainer from '../components/atoms/SubContainer';
import KaKaoLogo from '../components/atoms/KaKaoLogo';
import LoginForm from '../components/organisms/LoginForm';
import { staticUrl } from '../utils/convert';

const LoginPage = () => {
  return (
    <SubContainer>
      <KaKaoLogo />
      <LoginForm />
      <Link to={staticUrl('/register')} className='text-sm text-gray-600'>
        회원가입
      </Link>
    </SubContainer>
  );
};

export default LoginPage;
