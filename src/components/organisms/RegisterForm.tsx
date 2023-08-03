import React, { ComponentProps, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';
import registerApi from '../../apis/registerApi';
import { checkSignUpValidation } from '../../utils/checkValidation';
import { staticUrl } from '../../utils/convert';

const RegisterForm = () => {
  const [userNameValidator, setUserNameValidator] = useState({
    isValid: true,
    message: '',
  });
  const [emailValidator, setEmailValidator] = useState({
    isValid: true,
    message: '',
  });
  const [passwordValidator, setPasswordValidator] = useState({
    isValid: true,
    message: '',
  });
  const [passwordConfirmValidator, setPasswordConfirmValidator] = useState({
    isValid: true,
    message: '',
  });
  const [serverValidateMsg, setServerValidateMsg] = useState('');

  const { values, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const navigate = useNavigate();

  const handleSignUpBtnClick = () => {
    const { username, email, password, passwordConfirm } = values;
    const currentUsernameValidator = checkSignUpValidation({ type: 'username', value: username });
    const currentEmailValidator = checkSignUpValidation({ type: 'email', value: email });
    const currentPasswordValidator = checkSignUpValidation({ type: 'password', value: password });
    const currentPasswordConfirmValidator = checkSignUpValidation({
      type: 'passwordConfirm',
      value: passwordConfirm,
      password,
    });

    if (
      !currentUsernameValidator.isValid ||
      !currentEmailValidator.isValid ||
      !currentPasswordValidator.isValid ||
      !currentPasswordConfirmValidator.isValid
    ) {
      setUserNameValidator(currentUsernameValidator);
      setEmailValidator(currentEmailValidator);
      setPasswordValidator(currentPasswordValidator);
      setPasswordConfirmValidator(currentPasswordConfirmValidator);
      return;
    }

    registerApi
      .signUp({
        username,
        email,
        password,
      })
      .then((data) => {
        if (data.success) {
          navigate(staticUrl('/'));
        } else {
          setServerValidateMsg(data.error.message);
        }
      });
  };

  const handleBlur: ComponentProps<'input'>['onBlur'] = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUserNameValidator(checkSignUpValidation({ type: name, value }));
    if (name === 'email') setEmailValidator(checkSignUpValidation({ type: name, value }));
    if (name === 'password') setPasswordValidator(checkSignUpValidation({ type: name, value }));
    if (name === 'passwordConfirm')
      setPasswordConfirmValidator(checkSignUpValidation({ type: name, value, password: values.password }));
  };

  return (
    <FormContainer>
      <InputGroup
        id='username'
        name='username'
        type='text'
        placeholder='사용자 이름을 입력해주세요.'
        helperText={userNameValidator.message}
        label='이름'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputGroup
        id='email'
        name='email'
        type='email'
        placeholder='이메일을 입력해주세요.'
        helperText={emailValidator.message}
        label='이메일'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
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
        onBlur={handleBlur}
      />
      <InputGroup
        id='passwordConfirm'
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호를 다시 한 번 입력해주세요.'
        helperText={passwordConfirmValidator.message}
        label='비밀번호 확인'
        value={values.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p className='mt-1 text-sm text-red-500'>{serverValidateMsg}</p>
      <Button onClick={handleSignUpBtnClick}>회원가입</Button>
    </FormContainer>
  );
};

export default RegisterForm;
