import InputGroup from '../molecules/InputGroup';
import useInput from '../../hooks/useInput';
import { register } from '../services/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
const staticServerUri = process.env.REACT_APP_PATH||"";

const ERROR_MSG = {
  required: '필수 정보 입니다.',
  invalidEmail: '이메일 형식으로 입력해주세요.',
  invalidPassword: '8~20자의 영문, 숫자와 특수기호만 사용가능 합니다.',
  invalidPasswordConfirm: '비밀번호가 일치하지 않습니다.'
}
const RegisterForm = () => {
  const navigate = useNavigate();
  const {value, handleOnChange} = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });   

  const [error, setError]  = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const checkRegexRegister = (e) => {
    let result;
    const {name, value : customValue} = e.target;

    if(customValue.length === 0) {
      result = 'required'
    } else {
      switch (name) {
        case 'email' :
          result = emailRegex.test(customValue) ? true : 'invalidEmail'
          break
        case 'password': 
          result = passwordRegex.test(customValue) ? true : 'invalidPassword'
          break
        case 'passwordConfirm':
          result = 
            customValue === value.password ? true : 'invalidPasswordConfirm'
          break
        default:
          result = true
      }
      setError({...error, [name]: result})
    }
  };
  
  const registerReq = () => {
    // 회원가입 요청
    register({
      email: value.email,
      password: value.password,
      username: value.username
    })
      .then(() => {
          navigate(staticServerUri + '/login');
      })
      .catch((error) => {
        console.error('signup error:', error);
      })
  }

  return (
    <div className="mt-32">
      <h1 className="text-center text-4xl text-black font-medium pb-10">kakao</h1>
      <div className='border max-w-[500px] mx-auto py-10 px-10'> 
        <InputGroup 
          id="username" 
          type="text" 
          name="username"
          placeholder="사용자 이름을 입력해주세요."
          label="이름"
          value = {value.username}
          onChange={handleOnChange}
          onBlur = {checkRegexRegister}
          errorMsg = {error.username ? ERROR_MSG[error.username] : ''}
        />
        <InputGroup
          id="email" 
          type="email"
          name="email" 
          placeholder="이메일(아이디)를 입력해주세요."
          label="이메일"
          value={value.email}
          onChange={handleOnChange}
          onBlur={checkRegexRegister}
          errorMsg = {error.email ? ERROR_MSG[error.email] : ''}
        />
        <InputGroup 
          id="password" 
          type="password" 
          name="password"
          placeholder="**********"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
          onBlur={checkRegexRegister}
          errorMsg = {error.password ? ERROR_MSG[error.password] : ''}
        />
        <InputGroup 
          id="passwordConfirm" 
          type="password" 
          name="passwordConfirm"
          placeholder="**********"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
          onBlur={checkRegexRegister}
          errorMsg = {error.passwordConfirm ? ERROR_MSG[error.passwordConfirm] : ''}
        />
        <button
          className=" w-full bg-yellow-400 text-black py-3 mb-4 rounded"
          onClick={registerReq}
        >회원가입</button>
      </div>
  </div>
  );
}

export default RegisterForm;