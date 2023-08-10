import Title from '@components/atoms/Title';
import RegisterForm from '@components/organisms/RegisterForm';
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="mx-auto my-[100px]">
      <Title>Register</Title>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
