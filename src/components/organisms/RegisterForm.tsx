import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React from 'react';
import { AxiosResponse } from 'axios';

interface RegisterFromProps {
  onSubmit: (data: { email: string; password: string; username: string }) => Promise<AxiosResponse>;
}

const RegisterForm = ({ onSubmit }: RegisterFromProps) => {
  return (
    <div className="space-y-3">
      <InputGroup inputName="email" labelName="email" />
      <InputGroup inputName="password" labelName="password" />
      <InputGroup inputName="username" labelName="username" />
      <div className="">
        <FilledButton
          onClick={() => {
            onSubmit({ email: 'ttt@gmail.com', password: 'tttt', username: 'aaa' }).catch((err) => console.log(err));
          }}
        >
          제출
        </FilledButton>
      </div>
    </div>
  );
};

export default RegisterForm;
