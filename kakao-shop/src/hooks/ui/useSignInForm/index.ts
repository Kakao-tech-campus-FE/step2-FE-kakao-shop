import { FormEventHandler } from 'react';

import useInput from '@hooks/@common/useInput';

const useLoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [errorMessage, , setErrorMessage] = useInput('');

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
      setErrorMessage('계정을 올바르게 입력해주세요.');
      return;
    }
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
