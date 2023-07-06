import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../templates/loginTemplate';
import { LoginData } from '../../types/formData';
import { loginUser } from '../../apis/axios';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    resetField,
    formState,
    getFieldState,
    getValues,
  } = useForm<LoginData>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const navigator = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    const result = await loginUser(getValues());
    if (result) {
      navigator('/');
    } else {
      setResultMsg('로그인에 실패하였습니다.');
    }

    setIsLoading(false);
  };

  return (
    <LoginTemplate
      handleLogin={handleSubmit(handleLogin)}
      register={register}
      resetField={resetField}
      formState={formState}
      getFieldState={getFieldState}
      isLoading={isLoading}
      resultMsg={resultMsg}
    />
  );
}
