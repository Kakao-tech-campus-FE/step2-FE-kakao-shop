import SignUpForm from "@components/Form/SignUpForm.component";
import { canPassword, isEmail } from "@/functions/validator";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import {
  setEmail,
  setError,
  setPassword,
  setPasswordConfirm,
  setUsername,
  setWarning,
} from "@/store/signSlice";
import { checkEmail, signUp } from "@/store/signAction";

const SignUpPage = () => {
  const {
    error,
    data: { email, password, passwordConfirm, username },
    isWarning,
  } = useAppSelector((state: RootState) => state.signSlice);

  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resetWarning = {
      email: false,
      password: false,
      passwordConfirm: false,
      response: false,
    };

    if (!isEmail(email)) {
      dispatch(setError("이메일 형식이 올바르지 않습니다."));
      dispatch(setWarning({ ...resetWarning, email: true }));
      return;
    }

    if (!canPassword(password)) {
      dispatch(setError("비밀번호는 8자 이상 20자 이하입니다."));
      dispatch(setWarning({ ...resetWarning, password: true }));
      return;
    }

    if (password !== passwordConfirm) {
      dispatch(setError("비밀번호가 일치하지 않습니다."));
      dispatch(setWarning({ ...resetWarning, passwordConfirm: true }));
      return;
    }

    const checkEmailResult = await dispatch(checkEmail(email));
    if (checkEmailResult.meta.requestStatus === "rejected") {
      dispatch(setWarning({ ...resetWarning, email: true }));
      return;
    }

    const checkSignUpResult = await dispatch(
      signUp({
        email: email,
        username: username,
        password: password,
      })
    );
    if (checkSignUpResult.meta.requestStatus === "rejected") {
      dispatch(setWarning({ ...resetWarning, response: true }));
      return;
    }

    location.href = "/";
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {isWarning.response ?? (
        <p className="text-red-500 text-sm my-2">
          {error ?? "잘못된 형식입니다."}
        </p>
      )}
      <SignUpForm
        emailProps={{
          value: email,
          onChange: (e) => dispatch(setEmail(e.target.value)),
          isWrong: isWarning.email,
          wrongMessage: error ?? "",
        }}
        nameProps={{
          value: username,
          onChange: (e) => dispatch(setUsername(e.target.value)),
        }}
        passwordProps={{
          value: password,
          onChange: (e) => dispatch(setPassword(e.target.value)),
          minLength: 8,
          maxLength: 20,
          isWrong: isWarning.password,
          wrongMessage: error ?? "",
        }}
        passwordConfirmProps={{
          value: passwordConfirm,
          onChange: (e) => dispatch(setPasswordConfirm(e.target.value)),
          isWrong: isWarning.passwordConfirm,
          wrongMessage: error ?? "",
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SignUpPage;
