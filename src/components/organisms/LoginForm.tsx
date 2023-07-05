import React from 'react';
import useForm from '../../hooks/useForm';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';

const LoginForm = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const handleSignInBtnClick = () => {
    // TODO
  };

  return (
    <FormContainer>
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
      <Button onClick={handleSignInBtnClick}>로그인</Button>
    </FormContainer>
  );
};

export default LoginForm;
