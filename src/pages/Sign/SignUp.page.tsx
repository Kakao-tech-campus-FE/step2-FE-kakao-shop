import SignUpForm from "@components/Form/SignUpForm.component";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import { checkEmail, signUp } from "@/store/signAction";

const SignUpPage = () => {
  const { error } = useAppSelector((state: RootState) => state.signSlice);
  const { data } = useAppSelector((state: RootState) => state.signSlice);

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const checkEmailResult = await dispatch(checkEmail(data.email));
    if (checkEmailResult.meta.requestStatus === "rejected") {
      return;
    }

    const checkSignUpResult = await dispatch(signUp(data));
    if (checkSignUpResult.meta.requestStatus === "rejected") {
      return;
    }

    location.href = "/";
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignUpForm onSubmit={onSubmit} />
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
    </div>
  );
};

export default SignUpPage;
