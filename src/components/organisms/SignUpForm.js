import { useNavigate } from "react-router-dom";

import { checkEmailReq, signUpReq } from "apis/user.js";
import { useInput } from "hooks/useInput.js";
import { isValidSignUp } from "utils/validate.js";

import Container from "components/atoms/Container.js";
import Button from "components/atoms/Button.js";
import Input from "components/atoms/Input.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

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
            navigate(staticServerUri + "/login");
          })
          .catch((err) => {
            alert(err.response.data.error.message);
          });
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  const handleInputKeyUp = (event) => {
    if (event.key === "Enter") handleButtonClick();
  };

  return (
    <Container className="p-16 border">
      <Input
        className="block w-full mb-4 p-2 border-b-2 text-lg"
        type="email"
        name="email"
        onChange={handleInputChange}
        placeholder="이메일"
        value={inputValue.email}
      />
      <Input
        className="block w-full mb-4 p-2 border-b-2 text-lg"
        type="text"
        name="name"
        onChange={handleInputChange}
        placeholder="이름"
        value={inputValue.name}
      />
      <Input
        className="block w-full mb-4 p-2 border-b-2 text-lg"
        type="password"
        name="password"
        onChange={handleInputChange}
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <Input
        className="block w-full mb-4 p-2 border-b-2 text-lg"
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
        placeholder="비밀번호 확인"
        value={inputValue.confirmPassword}
      />
      <Button
        className="block w-full py-2 bg-yellow-300 rounded text-lg"
        onClick={handleButtonClick}
      >
        회원가입
      </Button>
    </Container>
  );
}
