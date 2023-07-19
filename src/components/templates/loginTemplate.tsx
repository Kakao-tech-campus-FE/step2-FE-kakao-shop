import {
  FormState, UseFormGetFieldState, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import LinkButton from '../atoms/linkButton';
import LoginForm from '../organisms/loginForm';
import { LoginData } from '../../types/formData';

interface LoginTemplateProps {
  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<LoginData>;
  setValue: UseFormSetValue<LoginData>;
  formState: FormState<LoginData>;
  getFieldState: UseFormGetFieldState<LoginData>;

  // Loading
  isLoading: boolean;

  // Result message
  errorMessage: string | null;
}

export default function LoginTemplate({
  handleLogin,
  register,
  setValue,
  formState,
  getFieldState,
  isLoading,
  errorMessage,
}: LoginTemplateProps) {
  return (
    <div className="mx-auto flex w-[48rem] grow flex-col items-center">
      <h1 className="mt-8 py-4 text-3xl">로그인</h1>
      <div className="my-4 w-full p-8">
        <LoginForm
          handleLogin={handleLogin}
          register={register}
          setValue={setValue}
          formState={formState}
          getFieldState={getFieldState}
          isLoading={isLoading}
        />
        {errorMessage !== null ? (
          <div className="my-4 text-center text-sm text-red-500">
            {errorMessage}
          </div>
        ) : null}
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
