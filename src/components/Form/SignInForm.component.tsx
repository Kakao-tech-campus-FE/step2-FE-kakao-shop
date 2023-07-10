import { FC } from "react";
import ButtonFormItem from "@components/Form/FormItem/ButtonFormItem.component";
import InputFormItem from "@components/Form/FormItem/InputFormItem.component";
import { SIGN } from "@/assets/sign.ko";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setEmail, setPassword } from "@/store/signSlice";

const { EMAIL, PASSWORD } = SIGN;

interface SignInProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * SignUpForm component
 * @param {emailProps} emailProps - 이메일 input의 props
 * @param {passwordProps} passwordProps - 비밀번호 input의 props
 * @param {function} onSubmit - form이 submit될 때 실행되는 함수
 * @returns {JSX.Element} - SignUpForm component
 * @constructor
 */
const SignInForm: FC<SignInProps> = ({ onSubmit }) => {
  const { data } = useAppSelector((state) => state.signSlice);
  const { error, isWarning } = useAppSelector((state) => state.signSlice);
  const { email, password } = data;

  const dispatch = useAppDispatch();

  return (
    <form className="flex flex-col gap-4 w-[40rem] " onSubmit={onSubmit}>
      <InputFormItem
        placeholder={EMAIL}
        type="text"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        isWrong={isWarning.email}
        wrongMessage={error ?? ""}
      />
      <InputFormItem
        placeholder={PASSWORD}
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        isWrong={isWarning.password}
        wrongMessage={error ?? ""}
        maxLength={20}
        minLength={8}
      />
      <div className="w-full mt-8">
        <ButtonFormItem color="primary" type="submit">
          로그인
        </ButtonFormItem>
      </div>
    </form>
  );
};

export default SignInForm;
