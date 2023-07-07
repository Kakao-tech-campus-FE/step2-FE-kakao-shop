import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';

interface RegisterFromProps {
  onSubmit: (data: { email: string; password: string; username: string }) => Promise<AxiosResponse>;
}

const RegisterForm = ({ onSubmit }: RegisterFromProps) => {
  const [usernameHT, setUsernameHT] = useState('ㅤ');
  const [emailHT, setEmailHT] = useState('ㅤ');
  const [passwordHT, setPasswordHT] = useState('ㅤ');
  const [passwordConfirmHT, setPasswordConfirmHT] = useState('ㅤ');
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
  const emailFormPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordLenthPattern = /^[^].{8,25}$/;
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const validationCheck = () => {
    // 동일한 이메일 확인
    if (inputInfo.username.length <= 0) {
      setUsernameHT('필수 항목입니다.');
    } else {
      setUsernameHT('ㅤ');
    }

    if (!emailFormPattern.test(inputInfo.email)) {
      setEmailHT('이메일 형식을 따라야 합니다.');
    } else {
      setEmailHT('ㅤ');
    }

    if (inputInfo.password !== inputInfo.passwordConfirm) {
      setPasswordConfirmHT('비밀번호가 동일하지 않습니다.');
    } else {
      setPasswordConfirmHT('ㅤ');
    }
  };

  return (
    <div className="space-y-3">
      <InputGroup
        inputName="username"
        labelName="username"
        value={inputInfo.username}
        helperText={usernameHT}
        onChange={handleOnChange}
      />
      <InputGroup
        inputName="email"
        labelName="email"
        value={inputInfo.email}
        helperText={emailHT}
        onChange={handleOnChange}
      />
      <InputGroup
        inputName="password"
        labelName="password"
        value={inputInfo.password}
        helperText={passwordHT}
        onChange={handleOnChange}
      />
      <InputGroup
        inputName="passwordConfirm"
        labelName="비밀번호 확인"
        value={inputInfo.passwordConfirm}
        helperText={passwordConfirmHT}
        onChange={handleOnChange}
      />
      <div className="">
        <FilledButton
          onClick={() => {
            onSubmit({ email: inputInfo.email, password: inputInfo.password, username: inputInfo.username });
          }}
        >
          제출
        </FilledButton>
      </div>
    </div>
  );
};

export default RegisterForm;
