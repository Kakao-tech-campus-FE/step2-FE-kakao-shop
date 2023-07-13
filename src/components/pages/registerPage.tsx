import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterTemplate from '../templates/registerTemplate';
import { RegisterFormData } from '../../types/formData';
import { requestUserRegistration } from '../../apis/axios';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState,
    getFieldState,
    trigger,
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigator = useNavigate();

  const handleRegister = async () => {
    setIsLoading(true);

    requestUserRegistration(getValues())
      .then(() => {
        alert('회원가입이 정상적으로 완료되었습니다.');
        navigator('/');
      })
      .catch(() => {
        setErrorMessage('회원가입에 실패하였습니다.');
      });

    setIsLoading(false);
  };

  return (
    <RegisterTemplate
      handleRegister={handleSubmit(handleRegister)}
      register={register}
      setValue={setValue}
      getValues={getValues}
      formState={formState}
      getFieldState={getFieldState}
      trigger={trigger}
      isEmailDuplicated={isEmailDuplicated}
      setIsEmailDuplicated={setIsEmailDuplicated}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
}
