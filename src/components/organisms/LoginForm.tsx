import React from 'react';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';

const LoginForm = () => {
  const form = {
    email: '',
    password: '',
  }; // TODO

  const handleInputChange = () => {
    // TODO
  };

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
        value={form.email}
        onChange={handleInputChange}
      />
      <InputGroup
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        label='비밀번호'
        value={form.password}
        onChange={handleInputChange}
      />
      <Button onClick={handleSignInBtnClick}>로그인</Button>
    </FormContainer>
  );
};

export default LoginForm;
