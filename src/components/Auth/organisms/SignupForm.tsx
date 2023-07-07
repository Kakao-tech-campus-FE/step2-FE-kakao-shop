import React, { useRef, useState } from 'react';
import InputGroup from '../../common/molecules/InputGroup';
import SubmitBtn from '../../common/atoms/SubmitBtn';
import { emailValidation, passwordValidation } from '../../../utils/validation';
import instance from '../../../api/instance';
import ErrorMessageBox from '../atoms/ErrorMessageBox';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import { AuthResponse } from '../../../types/Auth';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const checkIsEmailExist = async () => {
    if (emailRef.current) {
      if (!emailValidation(emailRef.current.value)) {
        emailRef.current.focus();
        setErrorMessage('아이디는 이메일 형식으로 입력하여야합니다.');
        return;
      }
      const checkData = { email: emailRef.current.value };
      const data: AuthResponse = await instance.post('/check', JSON.stringify(checkData));
      if (data.success) {
        setErrorMessage('');
        setIsValidEmail(true);
      } else {
        setErrorMessage('이미 존재하는 이메일입니다.');
      }
    }
  };

  const submitHandler = async () => {
    if (usernameRef.current && emailRef.current && passwordRef.current && passwordCheckRef.current) {
      const signUpData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: usernameRef.current.value,
      };

      if (!isValidEmail) {
        setErrorMessage('이메일을 검사 해주세요.');
        return;
      }

      if (!emailValidation(emailRef.current.value)) {
        emailRef.current.focus();
        setErrorMessage('아이디는 이메일 형식으로 입력하여야합니다.');
        return;
      }

      if (passwordCheckRef.current.value !== passwordRef.current.value) {
        passwordCheckRef.current.focus();
        setErrorMessage('비밀번호와 비밀번호 확인이 일치하지않습니다.');
        return;
      }

      if (!passwordValidation(passwordRef.current.value)) {
        passwordRef.current.focus();
        setErrorMessage('비밀번호는 영문/특수문자/숫자로 구성하여 공백없이 8~20자여야합니다.');
        return;
      }
      const data: AuthResponse = await instance.post('/join', JSON.stringify(signUpData));
      if (data.success) {
        navigate('/');
      } else {
        setIsValidEmail(false);
        setErrorMessage(data.error?.message);
      }
    }
  };

  return (
    <Form>
      <EmailCheckWrap>
        <InputGroup name="email" id="" title="이메일(아이디)" type="email" placeholder="이메일" ref={emailRef} />
        <CheckBtn type="button" disabled={isValidEmail} onClick={checkIsEmailExist}>
          이메일 검사
        </CheckBtn>
      </EmailCheckWrap>
      <InputGroup name="username" id="username" title="이름" type="text" placeholder="이름" ref={usernameRef} />
      <InputGroup name="password" id="password" title="비밀번호" type="password" placeholder="비밀번호" ref={passwordRef} />
      <InputGroup name="passwordCheck" id="passwordCheck" title="비밀번호 확인" placeholder="비밀번호 확인" type="password" ref={passwordCheckRef} />
      {errorMessage && <ErrorMessageBox>{errorMessage}</ErrorMessageBox>}
      <SubmitBtn callback={submitHandler}>회원가입</SubmitBtn>
    </Form>
  );
}

export default SignupForm;

const Form = styled.form`
  width: 100%;
  max-width: 580px;
  @media (min-width: 580px) {
    padding: 40px;
    border: 1px solid ${colors.gray};
  }
`;
const EmailCheckWrap = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBtn = styled.button`
  padding: 8px;
  margin-left: 8px;
  margin-top: 16px;
  border: none;
  font-size: 14px;
  background-color: ${colors.yellow};
  border-radius: 5px;
  cursor: pointer;
`;
