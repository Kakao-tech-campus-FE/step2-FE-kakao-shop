import { FormEventHandler } from 'react';

import useInput from '@hooks/@common/useInput';

const useSignUpForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [confirmPassword, onChangeConfirmPassword] = useInput('');
  const [errorMessage, , setErrorMessage] = useInput('');

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
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
  };

  return {
    state: {
      email,
      nickname,
      password,
      confirmPassword,
      errorMessage,
    },
    handler: {
      onChangeEmail,
      onChangeNickname,
      onChangePassword,
      onChangeConfirmPassword,
      onSubmit,
    },
  };
};

export default useSignUpForm;
