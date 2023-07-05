// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function SignUpForm() {
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
          console.dir(e.target.innerHTML);
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
