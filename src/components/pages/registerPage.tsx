import { useForm } from 'react-hook-form';
import RegisterTemplate from '../templates/registerTemplate';
import { IRegisterData } from '../../types/formData';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    resetField,
    getValues,
    formState,
    getFieldState,
    trigger,
  } = useForm<IRegisterData>({
    mode: 'all',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = () => {
    console.log('register');
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
    />
  );
}
