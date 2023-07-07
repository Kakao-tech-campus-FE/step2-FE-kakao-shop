// router
import { useNavigate } from "react-router-dom";
// axios
import { emailCheckReq, signUpReq } from "../../apis/api.js";

// hook
import useInput from "../../hooks/useInput.js";
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
        onChange={handleChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
      />
      <LabeledInput
        type="text"
        id="name"
        onChange={handleChange}
        label="이름"
        placeholder="이름"
        value={inputValue.name}
      />
      <LabeledInput
        type="password"
        id="pw"
        onChange={handleChange}
        label="비밀번호"
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <LabeledInput
        type="password"
        id="confirmPassword"
        onChange={handleChange}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        value={inputValue.confirmPassword}
      />
      <Button
        onClick={(e) => {
          emailCheckReq({ email: inputValue.email }).then((res) => {
            console.log(res.data);
            signUpReq({
              email: inputValue.email,
              password: inputValue.password,
              username: inputValue.name,
            })
              .then((res) => {
                console.log(res);
                navigate("/login");
              })
              .catch((err) => {});
            navigate("/login");
          });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
