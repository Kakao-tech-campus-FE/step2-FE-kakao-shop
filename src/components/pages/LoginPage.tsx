import Title from '@components/atoms/Title';
import LoginForm from '@components/organisms/LoginForm';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="mx-auto my-[100px]">
      <Title>Login</Title>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
