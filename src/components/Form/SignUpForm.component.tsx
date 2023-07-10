import { FC } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import {
  setEmail,
  setPassword,
  setPasswordConfirm,
  setUsername,
} from "@/store/signSlice";

const { EMAIL, EMAIL_WITH_ID, USERNAME, PASSWORD, PASSWORD_CONFIRM, SIGN_UP } =
  SIGN;

interface SignUpProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * SignUpForm component
 * @param {emailProps} emailProps - 이메일 input의 props
 * @param {nameProps} nameProps - 이름 input의 props
 * @param {passwordProps} passwordProps - 비밀번호 input의 props
 * @param {passwordConfirmProps} passwordConfirmProps - 비밀번호 확인 input의 props
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignUpForm: FC<SignUpProps> = ({ onSubmit }) => {
  const { error, isWarning } = useAppSelector(
    (state: RootState) => state.signSlice
  );
  const { data } = useAppSelector((state: RootState) => state.signSlice);
  const { email, username, password, passwordConfirm } = data;

  const dispatch = useAppDispatch();

  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmit}>
      <InputFormItem
        label={EMAIL_WITH_ID}
        placeholder={EMAIL}
        type="text"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        isWrong={isWarning.email}
        wrongMessage={error ?? ""}
      />
      <InputFormItem
        label={USERNAME}
        placeholder={USERNAME}
        type="text"
        value={username ?? ""}
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
      <InputFormItem
        label={PASSWORD}
        placeholder={PASSWORD}
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        isWrong={isWarning.password}
        wrongMessage={error ?? ""}
      />
      <InputFormItem
        label={PASSWORD_CONFIRM}
        placeholder={PASSWORD_CONFIRM}
        type="password"
        value={passwordConfirm ?? ""}
        onChange={(e) => dispatch(setPasswordConfirm(e.target.value))}
        isWrong={isWarning.passwordConfirm}
        wrongMessage={error ?? ""}
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
