import SignUpForm from "@/components/Form/SignUpForm.component";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <SignUpForm
        emailProps={{ value: email, onChange: (e) => setEmail(e.target.value) }}
        nameProps={{ value: name, onChange: (e) => setName(e.target.value) }}
        passwordProps={{
          value: password,
          onChange: (e) => setPassword(e.target.value),
        }}
        passwordConfirmProps={{
          value: passwordConfirm,
          onChange: (e) => setPasswordConfirm(e.target.value),
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(email, name, password, passwordConfirm);
        }}
      />
    </div>
  );
};

export default SignUpPage;
