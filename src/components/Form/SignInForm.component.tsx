import { FC, useState } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";
import { isPassword, isEmail } from "@/functions/validator";
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
  data: {
    email: string;
    password: string;
  };
  setForm: (action: { name: "email" | "password"; value: string }) => void;
}

/**
 * SignUpForm component
 * @component
 * @param {function} onSubmit - form의 submit 이벤트를 처리하는 함수
 * @param {object} data - form의 input value를 담고 있는 객체
 * @param {function} setForm - form의 input value를 변경하는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignInForm: FC<SignInProps> = ({ onSubmit, data, setForm }) => {
  const [isWarning, setWarning] = useState({
    email: false,
    password: false,
  });

  const { email, password } = data;

  const onSubmitPrevent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setWarning({ ...resetWarning, email: true });
      return;
    }

    if (!isPassword(password)) {
      setWarning({ ...resetWarning, password: true });
      return;
    }
    onSubmit(e);

    setWarning(resetWarning);
    setForm({ name: "email", value: "" });
    setForm({ name: "password", value: "" });
  };

  return (
    <form className="flex flex-col gap-4 w-[40rem]" onSubmit={onSubmitPrevent}>
      <InputFormItem
        placeholder={EMAIL}
        type="text"
        value={email}
        onChange={(e) => setForm({ name: "email", value: e.target.value })}
        isWrong={isWarning.email}
        wrongMessage={EMAIL_ERROR}
      />
      <InputFormItem
        placeholder={PASSWORD}
        type="password"
        value={password}
        onChange={(e) => setForm({ name: "password", value: e.target.value })}
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
