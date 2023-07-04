import SignUpForm from "@/components/Form/SignupForm.component";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <SignUpForm
      email={{ value: email, onChange: (e) => setEmail(e.target.value) }}
      name={{ value: name, onChange: (e) => setName(e.target.value) }}
      password={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      passwordConfirm={{
        value: passwordConfirm,
        onChange: (e) => setPasswordConfirm(e.target.value),
      }}
    />
  );
};

export default SignUpPage;
