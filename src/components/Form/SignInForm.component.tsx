import { FC, useState } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setEmail, setPassword } from "@/store/signSlice";
import { canPassword, isEmail } from "@/functions/validator";
import { ERROR } from "@/assets/error.ko";

const { EMAIL_ERROR, PASSWORD_ERROR } = ERROR;

const { EMAIL, PASSWORD, SIGN_IN } = SIGN;
const resetWarning = {
  email: false,
  password: false,
  response: false,
} as const;

interface SignInProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * SignUpForm component
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignInForm: FC<SignInProps> = ({ onSubmit }) => {
  const [isWarning, setWarning] = useState({
    email: false,
    password: false,
  });

  const { data } = useAppSelector((state) => state.signSlice);
  const { email, password } = data;

  const dispatch = useAppDispatch();

  const onSubmitPrevent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setWarning({ ...resetWarning, email: true });
      return;
    }

    if (!canPassword(password)) {
      setWarning({ ...resetWarning, password: true });
      return;
    }
    onSubmit(e);
  };

  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmitPrevent}>
      <InputFormItem
        placeholder={EMAIL}
        type="text"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        isWrong={isWarning.email}
        wrongMessage={EMAIL_ERROR}
      />
      <InputFormItem
        placeholder={PASSWORD}
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        isWrong={isWarning.password}
        wrongMessage={PASSWORD_ERROR}
        maxLength={20}
        minLength={8}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          {SIGN_IN}
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignInForm;
