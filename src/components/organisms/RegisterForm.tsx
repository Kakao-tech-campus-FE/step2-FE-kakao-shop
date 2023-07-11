import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';
import { login } from '@store/slices/userSlice';
import { RootState } from 'src/store';
import { useDispatch } from 'react-redux';
import { checkUsername, checkEmail, checkPassword } from '@utils/validationUtils';
import { useNavigate } from 'react-router-dom';
import { checkEmailDup } from '@api/registerApi';

interface RegisterFromProps {
  onSubmit: (data: { email: string; password: string; username: string }) => Promise<AxiosResponse>;
}

const RegisterForm = ({ onSubmit }: RegisterFromProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usernameHT, setUsernameHT] = useState('');
  const [emailHT, setEmailHT] = useState('');
  const [passwordHT, setPasswordHT] = useState('');
  const [passwordConfirmHT, setPasswordConfirmHT] = useState('');

  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const validationCheck = () => {
    if (inputInfo.username) setUsernameHT(checkUsername(inputInfo.username));

    setEmailHT(checkEmail(inputInfo.email));

    setPasswordHT(checkPassword(inputInfo.password));

    if (inputInfo.password !== inputInfo.passwordConfirm) {
      setPasswordConfirmHT('비밀번호가 동일하지 않습니다.');
      return false;
    }
    setPasswordConfirmHT('');

    return true;
  };

  const registerReq = () => {
    if (inputInfo.username)
      onSubmit({ email: inputInfo.email, password: inputInfo.password, username: inputInfo.username })
        .then((res) => {
          dispatch(login({ email: inputInfo.email }));
          navigate('/');
        })
        .catch((err) => {
          setEmailHT('이미 존재하는 이메일 입니다.');
        });
  };

  useEffect(() => {
    validationCheck();
  }, [inputInfo]);

  return (
    <div className="flex flex-col space-y-3">
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
      <FilledButton
        onClick={() => {
          registerReq();
        }}
      >
        제출
      </FilledButton>
    </div>
  );
};

export default RegisterForm;
