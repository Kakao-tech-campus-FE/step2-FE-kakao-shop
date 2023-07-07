import FilledButton from '@components/atoms/FilledButton';
import React from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';
import InputGroup from './InputGroup';

interface LoginFromProps {
  onSubmit: (data: { email: string; password: string }) => Promise<AxiosResponse>;
}

const LoginForm = ({ onSubmit }: LoginFromProps) => {
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
  return (
    <div className="flex flex-col space-y-2">
      <InputGroup labelName="이메일" value={inputInfo.email} onChange={handleOnChange} />
      <InputGroup labelName="비밀번호" inputType="password" value={inputInfo.password} onChange={handleOnChange} />
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
