import FilledButton from '@components/atoms/FilledButton';
import InputGroup from '@components/molecules/InputGroup';
import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import useInput from '@hooks/useInput';

interface RegisterFromProps {
  onSubmit: (data: { email: string; password: string; username: string }) => Promise<AxiosResponse>;
}

const RegisterForm = ({ onSubmit }: RegisterFromProps) => {
  const { value: inputInfo, handleOnChange } = useInput({
    initialValue: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  useEffect(() => {
    console.log(inputInfo);
  }, [inputInfo]);

  return (
    <div className="space-y-3">
      <InputGroup inputName="username" labelName="username" value={inputInfo.username} onChange={handleOnChange} />
      <InputGroup inputName="email" labelName="email" value={inputInfo.email} onChange={handleOnChange} />
      <InputGroup inputName="password" labelName="password" value={inputInfo.password} onChange={handleOnChange} />
      <div className="">
        <FilledButton
          onClick={() => {
            onSubmit({ email: inputInfo.email, password: inputInfo.password, username: inputInfo.username }).catch(
              (err) => console.log(err),
            );
          }}
        >
          제출
        </FilledButton>
      </div>
    </div>
  );
};

export default RegisterForm;
