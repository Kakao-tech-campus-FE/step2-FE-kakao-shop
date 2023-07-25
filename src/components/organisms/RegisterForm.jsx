import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { register } from '../../services/user';
import Title from '../atoms/Title';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { value, handleOnChange } = useInput({
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
        alert('회원가입이 정상적으로 완료되었습니다.');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.request.response);
        const errObject = JSON.parse(err.request.response);
        setError(errObject.error.message);
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
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
        id='username'
        type='text'
        name='username'
        placeholder='이름'
        label='이름'
        value={value.username}
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
      <InputGroup
        id='passwordConfirm'
        type='password'
        name='passwordConfirm'
        placeholder='비밀번호 확인'
        label='비밀번호 확인'
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      {error && <p className='text-red-500'>{error}</p>}
      <Button
        onClick={() => {
          registerReq();
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
