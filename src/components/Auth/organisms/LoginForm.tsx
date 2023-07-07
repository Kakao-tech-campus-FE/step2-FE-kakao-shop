import React, { useRef, useState } from 'react';
import SubmitBtn from '../../common/atoms/SubmitBtn';
import { emailValidation, passwordValidation } from '../../../utils/validation';
import instance from '../../../api/instance';
import { Link, useNavigate } from 'react-router-dom';
import reset from '../../../utils/reset';
import ErrorMessageBox from '../atoms/ErrorMessageBox';
import InputBox from '../../common/atoms/InputBox';
import { AuthResponse } from '../../../types/Auth';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import { login } from '../../../modules/auth';
import { useDispatch } from 'react-redux';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = async () => {
    if (emailRef.current && passwordRef.current) {
      if (!emailValidation(emailRef.current.value)) {
        setErrorMessage('이메일 입력 양식이 유효하지않습니다.');
        reset(emailRef.current);
        return;
      }
      if (!passwordValidation(passwordRef.current.value)) {
        setErrorMessage('비밀번호 입력 양식이 유효하지않습니다');
        reset(passwordRef.current);
        return;
      }
      const loginData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const response: AuthResponse = await instance.post('/login', JSON.stringify(loginData));
      if (response.success) {
        if (response.token && dispatch(login(response.token))) navigate('/');
      } else {
        setErrorMessage(response.error?.message);
      }
    }
  };
  return (
    <Wrap>
      <form>
        <InputBox placeholder="이메일" name="email" id="email" type="email" ref={emailRef} />
        <InputBox placeholder="비밀번호" name="password" id="password" type="password" ref={passwordRef} />
        {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}
        <SubmitBtn callback={submitHandler}>로그인</SubmitBtn>
      </form>
      <LinkButton to="/signup">회원가입</LinkButton>
    </Wrap>
  );
}

export default LoginForm;

const Wrap = styled.div`
  width: 100%;
  max-width: 580px;
  @media (min-width: 580px) {
    padding: 40px;
    border: 1px solid ${colors.gray};
  }
  text-align: center;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
  text-decoration: none;
  text-algin: center;
  color: ${colors.black};
`;
