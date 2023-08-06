import { SIGN } from "@/assets/sign.ko";
import { URL } from "@/assets/url.ko";
import { checkEmail, signUp } from "@/remotes/sign";
import SignUpForm from "@components/Form/SignUpForm.component";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

interface setFormAction {
  name: keyof typeof initState;
  value: string;
}

const initState = {
  email: "",
  password: "",
  passwordConfirm: "",
  username: "",
};

const formDataReducer = (state: typeof initState, action: setFormAction) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpData, setForm] = useReducer(formDataReducer, initState);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    const checkEmailResult = await checkEmail(signUpData.email);
    if (checkEmailResult.data.error) {
      setError(checkEmailResult.data.error.message);
      return;
    }

    const loginResult = await signUp(signUpData);
    if (loginResult.data.error) {
      setError(loginResult.data.error.message);
      return;
    }

    alert(SIGN.SIGN_UP_SUCCESS);

    navigate(URL.HOME);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SignUpForm onSubmit={onSubmit} data={signUpData} setForm={setForm} />
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
    </div>
  );
};

export default SignUpPage;
