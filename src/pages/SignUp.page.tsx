import SignUpForm from "@components/Form/SignUpForm.component";
import { canPassword, isEmail } from "@/functions/validator";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "@/store/signSlice";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isWrongs, setIsWrongs] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const dispatch = useDispatch();

  const onSignUp = () =>
    dispatch(
      signUp({
        email,
        name,
        password,
      })
    );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsWrongs({
      email: false,
      password: false,
      passwordConfirm: false,
    });

    if (!isEmail(email)) {
      setIsWrongs((prev) => Object({ ...prev, email: true }));
      return;
    }

    if (!canPassword(password)) {
      setIsWrongs((prev) => Object({ ...prev, password: true }));
      return;
    }

    if (password !== passwordConfirm) {
      setIsWrongs((prev) => Object({ ...prev, passwordConfirm: true }));
      return;
    }

    onSignUp();
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <SignUpForm
        emailProps={{
          value: email,
          onChange: (e) => setEmail(e.target.value),
          isWrong: isWrongs.email,
          wrongMessage: "이메일 형식이 아닙니다.",
        }}
        nameProps={{ value: name, onChange: (e) => setName(e.target.value) }}
        passwordProps={{
          value: password,
          onChange: (e) => setPassword(e.target.value),
          minLength: 8,
          maxLength: 20,
          isWrong: isWrongs.password,
          wrongMessage: "비밀번호는 8~20자이며 특수문자가 포함되어야 합니다.",
        }}
        passwordConfirmProps={{
          value: passwordConfirm,
          onChange: (e) => setPasswordConfirm(e.target.value),
          isWrong: isWrongs.passwordConfirm,
          wrongMessage: "비밀번호가 일치하지 않습니다.",
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SignUpPage;
