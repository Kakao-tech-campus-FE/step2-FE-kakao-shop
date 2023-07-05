import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React from 'react';

const RegisterForm = () => {
  return (
    <div className="space-y-3">
      <InputGroup inputName="email" labelName="email" />
      <InputGroup inputName="password" labelName="password" />
      <InputGroup inputName="username" labelName="username" />
      <div className="">
        <FilledButton>제출</FilledButton>
      </div>
    </div>
  );
};

export default RegisterForm;
