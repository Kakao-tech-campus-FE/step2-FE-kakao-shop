import {
  FormState, UseFormGetFieldState, UseFormGetValues, UseFormRegister, UseFormResetField, UseFormTrigger,
} from 'react-hook-form';
import LinkButton from '../atoms/linkButton';
import RegisterForm from '../organisms/registerForm';
import { IRegisterData } from '../../types/formData';

interface IRegisterTemplateProps {
  // Request registration
  handleRegister: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<IRegisterData>;
  resetField: UseFormResetField<IRegisterData>;
  getValues: UseFormGetValues<IRegisterData>;
  formState: FormState<IRegisterData>;
  getFieldState: UseFormGetFieldState<IRegisterData>;
  trigger: UseFormTrigger<IRegisterData>;
}

export default function RegisterTemplate({
  handleRegister,
  register,
  resetField,
  getValues,
  formState,
  getFieldState,
  trigger,
}: IRegisterTemplateProps) {
  return (
    <div className="flex min-w-[20rem] flex-col justify-center text-blue-950">
      <h1 className="mt-8 py-4 text-center text-3xl">회원 가입</h1>
      <div className="my-4 p-8 pb-16
          sm:w-[40rem] sm:self-center sm:rounded-sm sm:border sm:border-stone-300"
      >
        <RegisterForm
          handleRegister={handleRegister}
          register={register}
          resetField={resetField}
          getValues={getValues}
          formState={formState}
          getFieldState={getFieldState}
          trigger={trigger}
        />
      </div>
      <div className="text-center">
        <LinkButton href="/">
          메인 페이지로
        </LinkButton>
      </div>
    </div>
  );
}
