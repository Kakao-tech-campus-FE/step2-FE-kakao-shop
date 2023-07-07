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

    if (!passwordLenthPattern.test(inputInfo.password)) {
      setPasswordHT('8에서 20자 이내여야 합니다.');
    } else if (!passwordPattern.test(inputInfo.password)) {
      setPasswordHT('영문, 숫자, 특수문자가 포함되어야 합니다.');
    } else {
      setPasswordHT('ㅤ');
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
      <div className="">
        <FilledButton
          onClick={() => {
            onSubmit({ email: inputInfo.email, password: inputInfo.password, username: inputInfo.username }).catch(
              (err) => console.log(err),
            );
            validationCheck();
          }}
        >
          제출
        </FilledButton>
      </div>
    </div>
  );
};

export default RegisterForm;
