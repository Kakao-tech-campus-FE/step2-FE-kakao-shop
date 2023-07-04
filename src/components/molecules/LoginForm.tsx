import FilledButton from '@components/atoms/FilledButton';
import Input from '@components/atoms/Input';
import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" type="password" />
      <FilledButton>로그인</FilledButton>
    </div>
  );
};

export default LoginForm;
