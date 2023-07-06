import FilledButton from '@components/atoms/FilledButton';
import Input from '@components/atoms/Input';
import React from 'react';
import { AxiosResponse } from 'axios';

interface LoginFromProps {
  onSubmit: (data: { email: string; password: string }) => Promise<AxiosResponse>;
}

const LoginForm = ({ onSubmit }: LoginFromProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" type="password" />
      <FilledButton
        onClick={() => {
          onSubmit({ email: 'ssar@nate.com', password: 'meta1234!' }).catch((err) => console.log(err));
        }}
      >
        로그인
      </FilledButton>
    </div>
  );
};

export default LoginForm;
