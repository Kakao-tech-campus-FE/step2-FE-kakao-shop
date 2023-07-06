import {
  FormState, UseFormGetFieldState, UseFormRegister, UseFormResetField,
} from 'react-hook-form';
import { ILoginData } from '../../types/formData';
import Button from '../atoms/button';
import Label from '../atoms/label';
import InputBox from '../molecules/inputBox';
import { LOGIN_ERROR_MSG } from '../../utils/errorMsg';
import { LOGIN_VALID_REGEX } from '../../utils/regex';

interface ILoginFormProps {
  // Request login
  handleLogin: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<ILoginData>;
  resetField: UseFormResetField<ILoginData>;
  formState: FormState<ILoginData>;
  getFieldState: UseFormGetFieldState<ILoginData>;

  // Loading
  isLoading: boolean;
}

export default function LoginForm({
  handleLogin,
  register,
  resetField,
  formState,
  getFieldState,
  isLoading,
}: ILoginFormProps) {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <div className="my-8">
          <Label
            htmlFor="email"
            description="이메일"
          >
            <InputBox
              inputType="email"
              id="email"
              resetValue={() => resetField('email')}
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
              inputType="password"
              id="password"
              resetValue={() => resetField('password')}
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
      <div>
        <Button
          isSubmitType
          disabled={!formState.isDirty || !formState.isValid || isLoading}
        >
          {isLoading ? '처리 중' : '로그인'}
        </Button>
      </div>
    </form>
  );
}
