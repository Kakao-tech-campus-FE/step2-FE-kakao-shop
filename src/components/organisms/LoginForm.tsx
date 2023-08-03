import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';
import loginApi from '../../apis/loginApi';
import { login } from '../../store/slices/userSlices';
import { isEmpty } from '../../utils/checkValidation';
import { staticUrl } from '../../utils/convert';

const LoginForm = () => {
  const [emailValidator, setEmailValidator] = useState({
    isValid: true,
    message: '',
  });
  const [passwordValidator, setPasswordValidator] = useState({
    isValid: true,
    message: '',
  });
  const [serverValidateMsg, setServerValidateMsg] = useState('');

  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleSignInBtnClick = () => {
    const { email, password } = values;

    if (isEmpty(email)) {
      setEmailValidator({ isValid: false, message: '이메일을 입력해주세요' });
      return;
    }

    if (isEmpty(password)) {
      setPasswordValidator({ isValid: false, message: '비밀번호를 입력해주세요' });
      return;
    }

    loginApi
      .login({
        email,
        password,
      })
      .then((data) => {
        if (data.success) {
          const today = new Date();
          const tomorrow = new Date(today.setDate(today.getDate() + 1));
          dispatch(login({ email, expirationDate: tomorrow }));
          window.location.href = staticUrl('/');
        } else {
          setServerValidateMsg(data.error.message);
        }
      });
  };

  return (
    <FormContainer>
      <InputGroup
        id='email'
        name='email'
        type='email'
        placeholder='이메일을 입력해주세요.'
        helperText={emailValidator.message}
        label='이메일'
        value={values.email}
        onChange={handleChange}
        onBlur={(e) => {
          if (isEmpty(e.target.value)) {
            setEmailValidator({ isValid: false, message: '이메일을 입력해주세요' });
          } else {
            setEmailValidator({ isValid: true, message: '' });
          }
        }}
      />
      <InputGroup
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        helperText={passwordValidator.message}
        label='비밀번호'
        value={values.password}
        onChange={handleChange}
        onBlur={(e) => {
          if (isEmpty(e.target.value)) {
            setPasswordValidator({ isValid: false, message: '비밀번호를 입력해주세요' });
          } else {
            setPasswordValidator({ isValid: true, message: '' });
          }
        }}
      />
      <p className='mt-1 text-sm text-red-500'>{serverValidateMsg}</p>
      <Button onClick={handleSignInBtnClick}>로그인</Button>
    </FormContainer>
  );
};

export default LoginForm;
