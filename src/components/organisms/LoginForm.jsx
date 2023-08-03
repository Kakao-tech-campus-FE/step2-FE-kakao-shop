import InputGroup from '../molecules/InputGroup';
import useAuthInput from '../../hooks/useAuthInput';
//import { useEffect } from "react";
import * as Form from '../../styles/organisms/RegisterForm';
import Footer from '../atoms/Footer';
import { useNavigate } from 'react-router-dom';
import LinkText from '../atoms/LinkText';
import * as Link from '../../styles/atoms/Link';
import { login } from '../../apis/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useState } from 'react';
import Msg from '../atoms/Msg';
import { setLocalStorageWithExp } from '../../utils/localStorage';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const email = useSelector((state) => state.user.email);
  const [error, setError] = useState('');
  const { value, handleOnChange, handleOnCheck, invalidCheck } = useAuthInput({
    email: '',
    password: '',
  });

  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        setError('');
        dispatch(
          setUser({
            user: value.user,
          })
        );
        //console.log(res.headers.authorization);
        setLocalStorageWithExp('user', res.headers.authorization, 1000 * 1440);
        navigate(staticServerUrl + '/');
      })
      .catch((err) => {
        console.log(err.request.response);
        const errObject = JSON.parse(err.request.response);
        setError(errObject.error.message);
      });
  };

  const isValid =
    invalidCheck['email'] === true && invalidCheck['password'] === true;

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
          {error !== '' ? (
            <Msg message={error} className="login-error" />
          ) : null}
          <Form.Button
            onClick={() => {
              // api 로그인 요청
              loginReq();
            }}
            disabled={isValid === true ? '' : 'disabled'}
          >
            로그인
          </Form.Button>
          <Link.SignUp>
            <LinkText to={staticServerUrl + '/signup'} text="회원가입" />
          </Link.SignUp>
        </Form.Box>
      </Form.Container>
      <Footer />
    </>
  );
};

export default LoginForm;
