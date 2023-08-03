import { useNavigate } from 'react-router-dom';
import React from 'react';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { register } from '../../services/user';
import Title from '../atoms/Title';
// import { BrowserRouter as Redirect } from 'react-router-dom';
const staticServerUrl = process.env.REACT_APP_PATH || '';
function RegisterForm() {
  const navigate = useNavigate();
  const {
    value,
    handleOnChange,
    emailError,
    passwordError,
    handlePwChange,
    handleEmailChange,
    isAllOk,
  } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleClick = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((res) => {
        alert('성공');
        navigate(staticServerUrl+'/');
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };

  return (
    <Container className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Title>회원가입</Title>
        <div>
          <InputGroup
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="username"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요"
            label="이름"
            value={value.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <InputGroup
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="email"
            type="email"
            name="email"
            placeholder="이메일(아이디) 입력해주세요"
            label="이메일"
            value={value.email}
            onChange={handleEmailChange}
            message={emailError}
          />
        </div>
        <div>
          <InputGroup
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="password"
            type="password"
            name="password"
            placeholder="**********"
            label="비밀번호"
            value={value.password}
            onChange={handlePwChange}
            message={passwordError}
          />
        </div>
        <div>
          <InputGroup
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            placeholder="**********"
            label="비밀번호 확인"
            value={value.passwordConfirm}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <Button onClick={handleClick} disabled={!isAllOk}>
            회원가입
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default RegisterForm;
