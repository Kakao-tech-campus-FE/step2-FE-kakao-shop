import {
  FormState, UseFormGetFieldState, UseFormRegister, UseFormResetField,
} from 'react-hook-form';
import LinkButton from '../atoms/linkButton';
import LoginForm from '../organisms/loginForm';
import { ILoginData } from '../../types/formData';

interface ILoginTemplateProps {
  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<ILoginData>;
  resetField: UseFormResetField<ILoginData>;
  formState: FormState<ILoginData>;
  getFieldState: UseFormGetFieldState<ILoginData>;
}

export default function LoginTemplate({
  handleLogin,
  register,
  resetField,
  formState,
  getFieldState,
}: ILoginTemplateProps) {
  return (
    <div className="flex min-w-[20rem] flex-col justify-center text-blue-950">
      <h1 className="mt-8 py-4 text-center text-3xl">로그인</h1>
      <div className="my-4 p-8
          sm:w-[40rem] sm:self-center sm:rounded-sm sm:border sm:border-stone-300"
      >
        <LoginForm
          handleLogin={handleLogin}
          register={register}
          resetField={resetField}
          formState={formState}
          getFieldState={getFieldState}
        />
        <div className="my-4 text-center">
          <LinkButton href="/register">
            회원가입
          </LinkButton>
        </div>
      </div>
      <div className="text-center">
        <LinkButton href="/">
          메인 페이지로
        </LinkButton>
      </div>
    </div>
  );
}
