import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React from 'react';

const RegisterForm = () => {
  return (
    <div>
      <InputGroup inputName="email" labelName="email" />
      <InputGroup inputName="password" labelName="password" />
      <InputGroup inputName="username" labelName="username" />
      <FilledButton>제출</FilledButton>
    </div>
  );
};

export default RegisterForm;
