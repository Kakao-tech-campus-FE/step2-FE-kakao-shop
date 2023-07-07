import FilledButton from '@components/atoms/FilledButton';
import Input from '@components/atoms/Input';
import React from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';

interface LoginFromProps {
  onSubmit: (data: { email: string; password: string }) => Promise<AxiosResponse>;
}

const { value: inputInfo, handleOnChange } = useInput({
  initialValue: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
});

const LoginForm = ({ onSubmit }: LoginFromProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <Input placeholder="아이디" value={inputInfo.email} onChange={handleOnChange} />
      <Input placeholder="비밀번호" type="password" value={inputInfo.password} onChange={handleOnChange} />
      <FilledButton
        onClick={() => {
          onSubmit({ email: inputInfo.email, password: inputInfo.password });
        }}
      >
        로그인
      </FilledButton>
    </div>
  );
};

export default LoginForm;
