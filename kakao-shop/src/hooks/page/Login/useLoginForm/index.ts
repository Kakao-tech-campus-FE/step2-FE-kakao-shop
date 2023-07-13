import { signInRequest } from '@store/Login/reducers';
import { FormEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useInput from '@hooks/@common/useInput';

const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [errorMessage, , setErrorMessage] = useInput('');

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
      setErrorMessage('계정을 올바르게 입력해주세요.');
      return;
    }

    dispatch(signInRequest({ email, password, navigate, setErrorMessage }));
  };

  return {
    state: {
      email,
      password,
      errorMessage,
    },
    handler: {
      onChangeEmail,
      onChangePassword,
      onSubmit,
    },
  };
};

export default useLoginForm;

export type SignInRequest = {
  email: string;
  password: string;
  navigate: any;
  setErrorMessage: any;
};
