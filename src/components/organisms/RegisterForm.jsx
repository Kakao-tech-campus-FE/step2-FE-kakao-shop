import InputGroup from '../molecules/InputGroup';
import useAuthInput from '../../hooks/useAuthInput';
import * as Form from '../../styles/organisms/RegisterForm';
import Footer from '../atoms/Footer';
import LinkText from '../atoms/LinkText';
import * as Link from '../../styles/atoms/Link';
import { useNavigate } from 'react-router-dom';
import { register } from '../../apis/user';
import { useState } from 'react';
import Msg from '../atoms/Msg';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { value, handleOnChange, handleOnCheck, invalidCheck } = useAuthInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const registerReq = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((res) => {
        setError('');
        alert('회원가입 완료!\n 로그인이 필요합니다.');
        navigate(staticServerUrl + '/login');
      })
      .catch((err) => {
        console.log(err.request.response);
        const errObject = JSON.parse(err.request.response);
        setError(errObject.error.message);
      });
  };

  const isValid = Object.values(invalidCheck).every((value) => value === true);

  return (
    <>
      <Form.Container>
        <Form.Title>kakao</Form.Title>
        <Form.Box>
          <InputGroup
            id="email"
            name="email"
            type="email"
            placeholder="이메일"
            label="이메일 (아이디)"
            value={value.email}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
          />
          <InputGroup
            id="username"
            name="username"
            type="text"
            placeholder="이름"
            label="이름"
            value={value.username}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
          />
          <InputGroup
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            label="비밀번호"
            value={value.password}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
          />
          <InputGroup
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            label="비밀번호 확인"
            value={value.passwordConfirm}
            onChange={handleOnChange}
            onBlur={handleOnCheck}
            invalid={invalidCheck}
          />
          {error !== '' ? (
            <Msg message={error} className="login-error" />
          ) : null}
          <Form.Button
            onClick={() => {
              // api 회원 가입 요청
              registerReq();
            }}
            disabled={isValid === true ? '' : 'disabled'}
          >
            회원가입
          </Form.Button>
          <Link.Login>
            <LinkText to="/login" text="로그인" />
          </Link.Login>
        </Form.Box>
      </Form.Container>
      <Footer />
    </>
  );
};

export default RegisterForm;
