import { register } from '@api/registerApi';
import RegisterForm from '@components/organisms/RegisterForm';
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="w-[400px] mx-auto my-[100px]">
      <RegisterForm onSubmit={register} />
    </div>
  );
};

export default RegisterPage;
