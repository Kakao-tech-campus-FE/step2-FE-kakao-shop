import { signUpRequest, emailDuplicateCheckRequest } from '@store/SignUp/reducers';
import { FormEventHandler, MouseEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useInput from '@hooks/@common/useInput';

const useSignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [confirmPassword, onChangeConfirmPassword] = useInput('');
  const [errorMessage, , setErrorMessage] = useInput('');
  const [isUniqueEmail, setIsUniqueEmail] = useState(false);

  const onSignUpSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
      setErrorMessage('이메일 형식이 올바르지 않습니다.');
      return;
    }

    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(password) === false) {
      setErrorMessage('비밀번호 형식이 올바르지 않습니다.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    dispatch(signUpRequest({ email, password, username: nickname, navigate }));
  };

  const onEmailDuplicateCheck: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();

    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
      setErrorMessage('이메일 형식이 올바르지 않습니다.');
      return;
    }

    dispatch(emailDuplicateCheckRequest({ email, setErrorMessage, setIsUniqueEmail }));
  };

  return {
    state: {
      email,
      nickname,
      password,
      confirmPassword,
      errorMessage,
      isUniqueEmail,
    },
    handler: {
      onChangeEmail,
      onChangeNickname,
      onChangePassword,
      onChangeConfirmPassword,
      onSignUpSubmit,
      onEmailDuplicateCheck,
    },
  };
};

export default useSignUpForm;

export type SignUpRequest = {
  email: string;
  password: string;
  username: string;
  navigate: any;
};

export type EmailDuplicateCheckRequest = {
  email: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsUniqueEmail: React.Dispatch<React.SetStateAction<boolean>>;
};
