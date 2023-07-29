import {
  FormState, UseFormGetFieldState, UseFormRegister, UseFormSetValue,
} from 'react-hook-form';
import { LoginData } from '../../types/formData';
import Label from '../atoms/label';
import InputBox from '../molecules/inputBox';
import { LOGIN_ERROR_MSG } from '../../utils/errorMsg';
import { LOGIN_VALID_REGEX } from '../../utils/regex';
import Button from '../atoms/button';

interface LoginFormProps {
  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<LoginData>;
  setValue: UseFormSetValue<LoginData>;
  formState: FormState<LoginData>;
  getFieldState: UseFormGetFieldState<LoginData>;

  // Loading
  isLoading: boolean;
}

export default function LoginForm({
  handleLogin,
  register,
  setValue,
  formState,
  getFieldState,
  isLoading,
}: LoginFormProps) {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <div className="my-8">
          <Label
            htmlFor="email"
            description="이메일"
          >
            <InputBox
              type="email"
              id="email"
              resetValue={() => setValue('email', '', { shouldValidate: true, shouldDirty: true })}
              placeholder="이메일을 입력하세요 (example@example.com)"
              isDirty={getFieldState('email', formState).isDirty}
              {...register('email', {
                pattern: {
                  value: LOGIN_VALID_REGEX.email,
                  message: LOGIN_ERROR_MSG.email.INVALID_FORMAT,
                },
                required: LOGIN_ERROR_MSG.email.EMPTY,
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.email?.message}
          </div>
        </div>
        <div className="my-8">
          <Label
            htmlFor="password"
            description="비밀번호"
          >
            <InputBox
              type="password"
              id="password"
              resetValue={() => setValue('password', '', { shouldValidate: true, shouldDirty: true })}
              placeholder="비밀번호를 입력하세요"
              isDirty={getFieldState('password', formState).isDirty}
              {...register('password', {
                validate: {
                  isValidLength: (value) => (
                    LOGIN_VALID_REGEX.password_length.test(value)
                      || LOGIN_ERROR_MSG.password.INVALID_LENGTH
                  ),
                  isValidFormat: (value) => (
                    LOGIN_VALID_REGEX.password_format.test(value)
                      || LOGIN_ERROR_MSG.password.INVALID_FORMAT
                  ),
                },
                required: LOGIN_ERROR_MSG.password.EMPTY,
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.password?.message}
          </div>
        </div>
      </div>
      <div className="px-2 text-center">
        <Button
          type="submit"
          className={`w-full rounded-sm p-2 ${!formState.isDirty || !formState.isValid || isLoading ? 'bg-stone-300' : 'bg-kakao'}`}
          disabled={!formState.isDirty || !formState.isValid || isLoading}
          isLoading={isLoading}
        >
          로그인
        </Button>
      </div>
    </form>
  );
}
