import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginTemplate from '../templates/loginTemplate';
import { LoginData } from '../../types/formData';
import { requestUserLogin } from '../../apis/axios';
import { login } from '../../store/slices/userSlice';
import { LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState,
    getFieldState,
    getValues,
  } = useForm<LoginData>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const navigator = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIsLoading(true);
    const { email, password } = getValues();

    const result = await requestUserLogin({ email, password });
    if (result) {
      dispatch(login({
        isLogin: true,
        email,
      }));
      localStorage.setItem(LOCALSTORAGE_KEY_USERINFO, JSON.stringify({ email }));
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
      setValue={setValue}
      formState={formState}
      getFieldState={getFieldState}
      isLoading={isLoading}
      resultMsg={resultMsg}
    />
  );
}
