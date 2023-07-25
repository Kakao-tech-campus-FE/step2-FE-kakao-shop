import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { login } from '../../services/user';
import Title from '../atoms/Title';
import { setUser } from '../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLocalStorageWithExp } from '../../utils/localStorage';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  //
  const email = useSelector((state) => state.user.email);
  const { value, handleOnChange } = useInput({
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
        alert('로그인이 정상적으로 완료되었습니다.');
        console.log(res.headers.authorization);
        setLocalStorageWithExp('user', res.headers.authorization, 1000 * 1440);
        // navigate('/');
        // 윈도우 새로 고침
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.request.response);
        const errObject = JSON.parse(err.request.response);
        setError(errObject.error.message);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      {/* */}
      <span>{email}</span>
      <InputGroup
        id='email'
        type='email'
        name='email'
        placeholder='이메일(아이디)'
        label='이메일(아이디)'
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id='password'
        type='password'
        name='password'
        placeholder='비밀번호'
        label='비밀번호'
        value={value.password}
        onChange={handleOnChange}
      />
      {error && <span className='text-red-500'>{error}</span>}
      <Button
        onClick={() => {
          loginReq();
        }}
      >
        로그인
      </Button>
    </Container>
  );
}
