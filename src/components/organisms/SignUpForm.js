import { useNavigate } from "react-router-dom";

// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";
import { emailCheckReq, signUpReq } from "../../apis/api.js";

export default function SignUpForm() {
  const navigate = useNavigate();

  return (
    <Container>
      <LabeledInput
        type="email"
        id="email"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="이메일"
        placeholder="이메일"
      />
      <LabeledInput
        type="text"
        id="name"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="이름"
        placeholder="이름"
      />
      <LabeledInput
        type="password"
        id="pw"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="비밀번호"
        placeholder="비밀번호"
      />
      <LabeledInput
        type="password"
        id="confirmPw"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
      />
      <Button
        onClick={(e) => {
          emailCheckReq({ email: "jsh1147@naver.com" }).then((res) => {
            console.log(res.data);
            signUpReq({
              email: "email",
              password: "password",
              username: "username",
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
