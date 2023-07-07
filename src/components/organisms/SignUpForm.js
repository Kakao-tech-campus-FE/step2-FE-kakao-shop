// router
import { useNavigate } from "react-router-dom";
// axios
import { emailCheckReq, signUpReq } from "../../apis/api.js";
// hook
import useInput from "../../hooks/useInput.js";
// util
import { isValidSignUp } from "../../utils/validate.js";

// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function SignUpForm() {
  const { inputValue, handleChange } = useInput({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  return (
    <Container>
      <LabeledInput
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
      />
      <LabeledInput
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        label="이름"
        placeholder="이름"
        value={inputValue.name}
      />
      <LabeledInput
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        label="비밀번호"
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <LabeledInput
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleChange}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        value={inputValue.confirmPassword}
      />
      <Button
        onClick={() => {
          // validation
          if (!isValidSignUp(inputValue)) return;
          
          // email check
          emailCheckReq({ email: inputValue.email })
            .then((res) => {
              console.log(res.data);

              // sign up
              signUpReq({
                email: inputValue.email,
                password: inputValue.password,
                username: inputValue.name,
              })
                .then((res) => {
                  console.log(res);
                  navigate("/login");
                })
                .catch((err) => {
                  alert(err.response.data.error.message);
                });
            })
            .catch((err) => {
              alert(err.response.data.error.message);
            });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
