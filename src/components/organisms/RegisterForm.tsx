import React from 'react';
import useForm from '../../hooks/useForm';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';
import registerApi from '../../apis/registerApi';

const RegisterForm = () => {
  const { values, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSignUpBtnClick = () => {
    const { username, email, password } = values;

    registerApi.signUp({
      username,
      email,
      password,
    });
  };

  return (
    <FormContainer>
      <InputGroup
        id='username'
        name='username'
        type='text'
        placeholder='사용자 이름을 입력해주세요.'
        label='이름'
        value={values.username}
        onChange={handleChange}
      />
      <InputGroup
        id='email'
        name='email'
        type='email'
        placeholder='이메일을 입력해주세요.'
        label='이메일'
        value={values.email}
        onChange={handleChange}
      />
      <InputGroup
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        label='비밀번호'
        value={values.password}
        onChange={handleChange}
      />
      <InputGroup
        id='passwordConfirm'
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호를 다시 한 번 입력해주세요.'
        label='비밀번호 확인'
        value={values.passwordConfirm}
        onChange={handleChange}
      />
      <Button onClick={handleSignUpBtnClick}>회원가입</Button>
    </FormContainer>
  );
};

export default RegisterForm;
