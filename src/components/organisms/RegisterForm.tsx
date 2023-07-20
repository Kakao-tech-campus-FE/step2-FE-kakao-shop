import FilledButton from '@components/atoms/button/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React, { useState, useEffect } from 'react';
import useInput from '@hooks/useInput';
import { loginStore } from '@store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { checkUsername, checkEmail, checkPassword } from '@utils/validationUtils';
import { useNavigate } from 'react-router-dom';
import { register } from '@api/registerApi';

const RegisterForm = () => {
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
      register({ email: inputInfo.email, password: inputInfo.password, username: inputInfo.username })
        .then((res) => {
          console.log(res);
          dispatch(loginStore({ isLoggedIn: true, email: inputInfo.email }));
          navigate('/');
        })
        .catch((err) => {
          setEmailHT('이미 존재하는 이메일 입니다.');
        });
  };

  useEffect(() => {
    validationCheck();
  }, [inputInfo]);

  useEffect(() => {
    setEmailHT('');
    setPasswordHT('');
    setUsernameHT('');
    setPasswordConfirmHT('');
  }, []);

  return (
    <div className="flex flex-col space-y-3">
      <InputGroup
        inputName="username"
        labelName="이름"
        value={inputInfo.username}
        helperText={usernameHT}
        onChange={handleOnChange}
      />
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
      <FilledButton onClick={registerReq}>제출</FilledButton>
    </div>
  );
};

export default RegisterForm;
