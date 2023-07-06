import { canPassword, isEmail } from "@/functions/validator";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import { setEmail, setError, setPassword, setWarning } from "@/store/signSlice";
import { signIn } from "@/store/signAction";
import SignInForm from "@/components/Form/SignInForm.component";

const SignInPage = () => {
  const {
    error,
    data: { email, password },
    isWarning,
  } = useAppSelector((state: RootState) => state.signSlice);

  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resetWarning = {
      email: false,
      password: false,
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

    const checkSignUpResult = await dispatch(
      signIn({
        email: email,
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
      <SignInForm
        emailProps={{
          value: email,
          onChange: (e) => dispatch(setEmail(e.target.value)),
          isWrong: isWarning.email,
          wrongMessage: error ?? "",
        }}
        passwordProps={{
          value: password,
          onChange: (e) => dispatch(setPassword(e.target.value)),
          minLength: 8,
          maxLength: 20,
          isWrong: isWarning.password,
          wrongMessage: error ?? "",
        }}
        onSubmit={onSubmit}
      />
      {isWarning.response && (
        <p className="text-red-500 text-sm my-2">
          {error ?? "잘못된 형식입니다."}
        </p>
      )}
    </div>
  );
};

export default SignInPage;
