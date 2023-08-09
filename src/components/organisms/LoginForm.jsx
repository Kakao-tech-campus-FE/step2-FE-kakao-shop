import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { login } from '../../services/user';
import Title from '../atoms/Title';
import { setEmail } from '../../store/slices/userSlice';
import Label from '../atoms/Label';

const staticServerUrl = process.env.REACT_APP_PATH || '';
function LoginForm() {
  // 모든 reducer함수를 호출하려면 먼저 dispatch
  const dispatch = useDispatch();
  // 데이터 가져올 때
  // state 모든 state를 다담고 있는 최상위 state
  const email = useSelector((state) => state.user.email);
  const { value, handleOnChange } = useInput({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        dispatch(
          setEmail({
            user: value.email,
          }),
        );
        const item = {
          value: res.headers.authorization,
          expiration: Date.now() + 600000,
        };
        localStorage.setItem('user', JSON.stringify(item));
        alert('로그인 성공!');
        navigate(staticServerUrl + '/');
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        alert(err.response.data.error.message);
      });
  };
  const handleOnClick = () => {
    navigate(staticServerUrl + '/signup');
  };
  return (
    <Container className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Title>로그인</Title>
        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </Label>
          <div className="mt-2">
            <InputGroup
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="이메일" // 추가: 이메일 입력 필드 placeholder 추가
              value={value.email} // 추가: 이메일 입력 필드 값 바인딩
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </Label>
            <div className="text-sm" />
          </div>
          <div className="mt-2">
            <InputGroup
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="비밀번호" // 추가: 비밀번호 입력 필드 placeholder 추가
              value={value.password} // 추가: 비밀번호 입력 필드 값 바인딩
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div>
          <Button
            onClick={() => {
              loginReq();
            }}
          >
            로그인
          </Button>
        </div>

        <p
          onClick={handleOnClick}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Not a member?
        </p>
      </div>
    </Container>
  );
}

export default LoginForm;
