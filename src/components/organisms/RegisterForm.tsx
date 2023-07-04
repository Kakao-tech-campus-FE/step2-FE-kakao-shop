import React from 'react';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import FormContainer from '../atoms/FormContainer';

const RegisterForm = () => {
  const form = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }; // TODO

  const handleInputChange = () => {
    // TODO
  };

  const handleSignUpBtnClick = () => {
    // TODO
  };

  return (
    <FormContainer>
      <InputGroup
        id='username'
        name='username'
        type='text'
        placeholder='사용자 이름을 입력해주세요.'
        label='이름'
        value={form.username}
        onChange={handleInputChange}
      />
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
      <InputGroup
        id='passwordConfirm'
        name='passwordConfirm'
        type='password'
        placeholder='비밀번호를 다시 한 번 입력해주세요.'
        label='비밀번호 확인'
        value={form.passwordConfirm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSignUpBtnClick}>회원가입</Button>
    </FormContainer>
  );
};

export default RegisterForm;
