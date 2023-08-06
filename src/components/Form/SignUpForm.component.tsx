import { FC, useState } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";
import { isPassword, isEmail } from "@/functions/validator";
import { ERROR } from "@/assets/error.ko";

const { EMAIL, EMAIL_WITH_ID, USERNAME, PASSWORD, PASSWORD_CONFIRM, SIGN_UP } =
  SIGN;
const { EMAIL_ERROR, PASSWORD_ERROR, PASSWORD_CONFIRM_ERROR } = ERROR;

const resetWarning = {
  email: false,
  password: false,
  passwordConfirm: false,
} as const;

interface SignUpProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  data: {
    email: string;
    password: string;
    passwordConfirm: string;
    username: string;
  };
  setForm: (action: {
    name: "email" | "password" | "passwordConfirm" | "username";
    value: string;
  }) => void;
}

/**
 * SignUpForm component
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @param {object} data - form의 input value를 담고 있는 객체
 * @param {function} setForm - form의 input value를 변경하는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignUpForm: FC<SignUpProps> = ({ onSubmit, data, setForm }) => {
  const [isWarning, setWarning] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const { email, username, password, passwordConfirm } = data;

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
    if (password !== passwordConfirm) {
      setWarning({ ...resetWarning, passwordConfirm: true });
      return;
    }
    onSubmit(e);
  };

  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmitPrevent}>
      <InputFormItem
        label={EMAIL_WITH_ID}
        placeholder={EMAIL}
        type="text"
        value={email}
        onChange={(e) => setForm({ name: "email", value: e.target.value })}
        isWrong={isWarning.email}
        wrongMessage={EMAIL_ERROR}
      />
      <InputFormItem
        label={USERNAME}
        placeholder={USERNAME}
        type="text"
        value={username}
        onChange={(e) => setForm({ name: "username", value: e.target.value })}
      />
      <InputFormItem
        label={PASSWORD}
        placeholder={PASSWORD}
        type="password"
        value={password}
        onChange={(e) => setForm({ name: "password", value: e.target.value })}
        isWrong={isWarning.password}
        wrongMessage={PASSWORD_ERROR}
      />
      <InputFormItem
        label={PASSWORD_CONFIRM}
        placeholder={PASSWORD_CONFIRM}
        type="password"
        value={passwordConfirm ?? ""}
        onChange={(e) =>
          setForm({ name: "passwordConfirm", value: e.target.value })
        }
        isWrong={isWarning.passwordConfirm}
        wrongMessage={PASSWORD_CONFIRM_ERROR}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          {SIGN_UP}
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignUpForm;
