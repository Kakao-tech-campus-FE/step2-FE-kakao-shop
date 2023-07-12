import { useNavigate } from "react-router-dom";

import { checkEmailReq, signUpReq } from "apis/user.js";
import useInput from "hooks/useInput.js";
import { isValidSignUp } from "utils/validate.js";

import Container from "components/atoms/Container.js";
import Button from "components/atoms/Button.js";
import LabeledInput from "components/molecules/LabeledInput.js";

export default function SignUpForm() {
  const { inputValue, handleInputChange } = useInput({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // validation
    if (!isValidSignUp(inputValue)) return;

    // email check
    checkEmailReq({ email: inputValue.email })
      .then(() => {
        // sign up
        signUpReq({
          email: inputValue.email,
          password: inputValue.password,
          username: inputValue.name,
        })
          .then(() => {
            navigate("/login");
          })
          .catch((err) => {
            alert(err.response.data.error.message);
          });
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  return (
    <Container>
      <LabeledInput
        type="email"
        id="email"
        name="email"
        onChange={handleInputChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
      />
      <LabeledInput
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        label="이름"
        placeholder="이름"
        value={inputValue.name}
      />
      <LabeledInput
        type="password"
        id="password"
        name="password"
        onChange={handleInputChange}
        label="비밀번호"
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <LabeledInput
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleInputChange}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        value={inputValue.confirmPassword}
      />
      <Button onClick={handleButtonClick}>회원가입</Button>
    </Container>
  );
}
