import LoginForm from '@components/molecules/LoginForm';
import React from 'react';
import login from '@api/loginApi';

const LoginPage = () => {
  return (
    <div className="w-[250px] mx-auto my-[100px]">
      <LoginForm onSubmit={login} />
    </div>
  );
};

export default LoginPage;
