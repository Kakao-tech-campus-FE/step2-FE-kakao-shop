import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { RootState } from "@/store";
import { signIn } from "@/store/signAction";
import SignInForm from "@/components/Form/SignInForm.component";
import { Link, useNavigate } from "react-router-dom";
import { SIGN } from "@/assets/sign.ko";

const { SIGN_UP, NO_ACCOUNT } = SIGN;

const SignInPage = () => {
  const {
    error,
    data: { email, password },
  } = useAppSelector((state: RootState) => state.signSlice);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const checkSignUpResult = await dispatch(
      signIn({
        email: email,
        password: password,
      })
    );

    if (checkSignUpResult.meta.requestStatus === "rejected") {
      return;
    }

    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignInForm onSubmit={onSubmit} />
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
      <div className="mt-4">
        {NO_ACCOUNT}{" "}
        <Link className="text-gray-400" to="/signup">
          {SIGN_UP}
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
