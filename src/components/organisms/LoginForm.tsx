import FilledButton from '@components/atoms/FilledButton';
import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';
import { checkEmail, checkPassword } from '@utils/validationUtils';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@store/slices/userSlice';
import { RootState } from 'src/store';
import { useNavigate } from 'react-router-dom';
import InputGroup from '../molecules/InputGroup';

interface LoginFromProps {
  onSubmit: (data: { email: string; password: string }) => Promise<AxiosResponse>;
}

const LoginForm = ({ onSubmit }: LoginFromProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  const [emailHT, setEmailHT] = useState('');
  const [passwordHT, setPasswordHT] = useState('');
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      email: '',
      password: '',
    },
  });
  const loginReq = () => {
    onSubmit({ email: inputInfo.email, password: inputInfo.password })
      .then((res) => {
        console.log(res.headers.authorization);
        dispatch(login({ email: inputInfo.email }));
        localStorage.clear();
        localStorage.setItem('id', res.headers.authorization);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validationCheck = () => {
    setEmailHT(checkEmail(inputInfo.email));
    setPasswordHT(checkPassword(inputInfo.password));
  };

  useEffect(() => {
    validationCheck();
  }, [inputInfo]);

  return (
    <div className="flex flex-col space-y-2">
      <span>{email}</span>
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
          loginReq();
        }}
      >
        로그인
      </FilledButton>
    </div>
  );
};

export default LoginForm;
