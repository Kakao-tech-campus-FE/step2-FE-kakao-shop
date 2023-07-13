import React from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { register } from '../../services';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../store/slices/userSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { value, handleOnChange, loading } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleRegister = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((response) => {
        // 회원가입 성공 시 처리할 로직 추가
        console.log(response);
        dispatch(setEmail({ email: value.email }));
      })
      .catch((error) => {
        // 회원가입 실패 시 처리할 로직 추가
        console.log(error);
      });
  };

  return (
    <Container>
      {/* <Loader loading={loading} /> */}
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="*******"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="*******"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button onClick={handleRegister}>회원가입</Button>
    </Container>
  );
};

export default RegisterForm;
