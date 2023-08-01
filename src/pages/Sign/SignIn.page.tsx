import SignInForm from "@/components/Form/SignInForm.component";
import { Link, useNavigate } from "react-router-dom";
import { SIGN } from "@/assets/sign.ko";
import { useReducer, useState } from "react";
import { signIn } from "@/remotes/sign";
import { setSignIn } from "@/store/signSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { URL } from "@/assets/url.ko";
import { isAxiosError } from "axios";

const { SIGN_UP, NO_ACCOUNT } = SIGN;

interface setFormAction {
  name: keyof typeof initState;
  value: string;
}

const initState = {
  email: "",
  password: "",
};

const formDataReducer = (state: typeof initState, action: setFormAction) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const SignInPage = () => {
  const navigate = useNavigate();
  const [signInData, setForm] = useReducer(formDataReducer, initState);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const loginResult = await signIn(signInData);
    if (loginResult.data.error) {
      setError(loginResult.data.error.message);
      return;
    }
    dispatch(setSignIn());
    navigate(URL.HOME);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignInForm onSubmit={onSubmit} data={signInData} setForm={setForm} />
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
