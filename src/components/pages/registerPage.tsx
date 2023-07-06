import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterTemplate from '../templates/registerTemplate';
import { RegisterFormData } from '../../types/formData';
import { registerUser } from '../../apis/axios';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    resetField,
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
  const [resultMsg, setResultMsg] = useState('');

  const navigator = useNavigate();

  const handleRegister = async () => {
    setIsLoading(true);

    const result = await registerUser(getValues());
    if (result) {
      alert('회원가입이 정상적으로 완료되었습니다.');
      navigator('/');
    } else {
      setResultMsg('회원가입에 실패하였습니다.');
    }

    setIsLoading(false);

    return null;
  };

  return (
    <RegisterTemplate
      handleRegister={handleSubmit(handleRegister)}
      register={register}
      resetField={resetField}
      getValues={getValues}
      formState={formState}
      getFieldState={getFieldState}
      trigger={trigger}
      isEmailDuplicated={isEmailDuplicated}
      setIsEmailDuplicated={setIsEmailDuplicated}
      isLoading={isLoading}
      resultMsg={resultMsg}
    />
  );
}
