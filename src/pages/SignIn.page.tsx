import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import { signIn } from "@/store/signAction";
import SignInForm from "@/components/Form/SignInForm.component";
import { ERROR } from "@/assets/error.ko";

const { FORM_ERROR } = ERROR;

const SignInPage = () => {
  const {
    error,
    data: { email, password },
  } = useAppSelector((state: RootState) => state.signSlice);

  const dispatch = useAppDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checkSignUpResult = await dispatch(
      signIn({
        email: email,
        password: password,
      })
    );

    if (checkSignUpResult.meta.requestStatus === "rejected") {
      return;
    }

    location.href = "/";
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignInForm onSubmit={onSubmit} />
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
    </div>
  );
};

export default SignInPage;
