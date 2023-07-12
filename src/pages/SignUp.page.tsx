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
import {
  EMAIL_ERROR,
  PASSWORD_ERROR,
  PASSWORD_CONFIRM_ERROR,
  FORM_ERROR,
} from "@/assets/error.ko.json";

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
      dispatch(setError(EMAIL_ERROR));
      dispatch(setWarning({ ...resetWarning, email: true }));
      return;
    }

    if (!canPassword(password)) {
      dispatch(setError(PASSWORD_ERROR));
      dispatch(setWarning({ ...resetWarning, password: true }));
      return;
    }

    if (password !== passwordConfirm) {
      dispatch(setError(PASSWORD_CONFIRM_ERROR));
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
        email,
        username: username ?? "",
        password,
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
      <SignUpForm
        emailProps={{
          value: email,
          onChange: (e) => dispatch(setEmail(e.target.value)),
          isWrong: isWarning.email,
          wrongMessage: error ?? "",
        }}
        nameProps={{
          value: username ?? "",
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
          value: passwordConfirm ?? "",
          onChange: (e) => dispatch(setPasswordConfirm(e.target.value)),
          isWrong: isWarning.passwordConfirm,
          wrongMessage: error ?? "",
        }}
        onSubmit={onSubmit}
      />
      {isWarning.response && (
        <p className="text-red-500 text-sm my-2">{error ?? FORM_ERROR}</p>
      )}
    </div>
  );
};

export default SignUpPage;
