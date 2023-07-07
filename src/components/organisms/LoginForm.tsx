import FilledButton from '@components/atoms/FilledButton';
import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';
import { checkEmail, checkPassword } from '@utils/validationUtils';
import InputGroup from '../molecules/InputGroup';

interface LoginFromProps {
  onSubmit: (data: { email: string; password: string }) => Promise<AxiosResponse>;
}

const LoginForm = ({ onSubmit }: LoginFromProps) => {
  const [emailHT, setEmailHT] = useState('');
  const [passwordHT, setPasswordHT] = useState('');
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const validationCheck = () => {
    setEmailHT(checkEmail(inputInfo.email));
    setPasswordHT(checkPassword(inputInfo.password));
  };

  useEffect(() => {
    validationCheck();
  }, [inputInfo]);

  return (
    <div className="flex flex-col space-y-2">
      <InputGroup
        inputName="email"
        labelName="이메일"
        value={inputInfo.email}
        helperText={emailHT}
        onChange={handleOnChange}
      />
      <InputGroup
        inputName="password"
        labelName="비밀번호"
        inputType="password"
        value={inputInfo.password}
        helperText={passwordHT}
        onChange={handleOnChange}
      />
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
