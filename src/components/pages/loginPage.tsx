import { useForm } from 'react-hook-form';
import LoginTemplate from '../templates/loginTemplate';
import { ILoginData } from '../../types/formData';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    resetField,
    formState,
    getFieldState,
  } = useForm<ILoginData>({
    mode: 'all',
  });
  const handleLogin = () => {
    console.log('login');
  };

  return (
    <LoginTemplate
      handleLogin={handleSubmit(handleLogin)}
      register={register}
      resetField={resetField}
      formState={formState}
      getFieldState={getFieldState}
    />
  );
}
