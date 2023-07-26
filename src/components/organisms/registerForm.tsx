import {
  FormState, UseFormGetFieldState, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormTrigger,
} from 'react-hook-form';
import Label from '../atoms/label';
import InputBox from '../molecules/inputBox';
import { RegisterFormData } from '../../types/formData';
import { REGISTER_VALID_REGEX } from '../../utils/regex';
import { REGISTER_ERROR_MSG } from '../../utils/errorMsg';
import { debounce } from '../../utils/debounce';
import { checkEmail } from '../../apis/user';
import { DEBOUNCE_TIMEOUT } from '../../utils/common';
import Loader from '../atoms/loader';

interface RegisterFormProps {
  // Request registration
  handleRegister: React.FormEventHandler<HTMLFormElement>;

  // react-hook-form properties
  register: UseFormRegister<RegisterFormData>;
  setValue: UseFormSetValue<RegisterFormData>;
  getValues: UseFormGetValues<RegisterFormData>;
  formState: FormState<RegisterFormData>;
  getFieldState: UseFormGetFieldState<RegisterFormData>;
  trigger: UseFormTrigger<RegisterFormData>;

  // Email validation
  isEmailDuplicated: boolean;
  setIsEmailDuplicated: React.Dispatch<React.SetStateAction<boolean>>;

  // Loading
  isLoading: boolean;
}

export default function RegisterForm({
  handleRegister,
  register,
  setValue,
  getValues,
  formState,
  getFieldState,
  trigger,
  isEmailDuplicated,
  setIsEmailDuplicated,
  isLoading,
}: RegisterFormProps) {
  return (
    <form onSubmit={handleRegister}>
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
                  value: REGISTER_VALID_REGEX.email,
                  message: REGISTER_ERROR_MSG.email.INVALID_FORMAT,
                },
                required: REGISTER_ERROR_MSG.email.EMPTY,
                onChange: debounce(async () => {
                  if (!getFieldState('email', formState).invalid) {
                    const value = getValues('email');
                    try {
                      const response = await checkEmail(value);

                      if (response.data.success === true) {
                        setIsEmailDuplicated(false);
                      } else {
                        setIsEmailDuplicated(true);
                      }
                    } catch (error) {
                      setIsEmailDuplicated(true);
                    }
                  }
                }, DEBOUNCE_TIMEOUT),
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.email?.message}
            {!getFieldState('email', formState).invalid && isEmailDuplicated
              ? <div>{REGISTER_ERROR_MSG.email.DUPLICATE}</div> : null}
          </div>
        </div>
        <div className="my-8">
          <Label
            htmlFor="username"
            description="이름"
          >
            <InputBox
              type="text"
              id="username"
              resetValue={() => setValue('username', '', { shouldValidate: true, shouldDirty: true })}
              placeholder="이름을 입력하세요"
              isDirty={getFieldState('username', formState).isDirty}
              {...register('username', {
                pattern: {
                  value: REGISTER_VALID_REGEX.username,
                  message: REGISTER_ERROR_MSG.username.INVALID_FORMAT,
                },
                required: REGISTER_ERROR_MSG.username.EMPTY,
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.username?.message}
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
                    REGISTER_VALID_REGEX.password_length.test(value)
                      || REGISTER_ERROR_MSG.password.INVALID_LENGTH
                  ),
                  isValidFormat: (value) => (
                    REGISTER_VALID_REGEX.password_format.test(value)
                      || REGISTER_ERROR_MSG.password.INVALID_FORMAT
                  ),
                },
                required: REGISTER_ERROR_MSG.password.EMPTY,
                onChange: () => trigger('confirmPassword'),
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.password?.message}
          </div>
        </div>
        <div className="my-8">
          <Label
            htmlFor="confirm-password"
            description="비밀번호 확인"
          >
            <InputBox
              type="password"
              id="confirm-password"
              resetValue={() => setValue('confirmPassword', '', { shouldValidate: true, shouldDirty: true })}
              placeholder="비밀번호를 다시 입력하세요"
              isDirty={getFieldState('confirmPassword', formState).isDirty}
              {...register('confirmPassword', {
                validate: {
                  isSamePassword: (value) => (
                    value === getValues('password')
                    || REGISTER_ERROR_MSG.confirmPassword.NOT_EQUAL
                  ),
                },
              })}
            />
          </Label>
          <div className="px-2 text-sm text-red-500">
            {formState.errors.confirmPassword?.message}
          </div>
        </div>
      </div>
      <div className="px-2 text-center">
        {isLoading ? <Loader /> : (
          <button
            type="submit"
            className={`w-full rounded-sm p-2 ${!formState.isDirty || !formState.isValid || isEmailDuplicated || isLoading ? 'bg-stone-300' : 'bg-kakao'}`}
            disabled={!formState.isDirty || !formState.isValid || isEmailDuplicated || isLoading}
          >
            가입하기
          </button>
        )}
      </div>
    </form>
  );
}
