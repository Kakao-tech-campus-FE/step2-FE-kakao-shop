import { useNavigate } from "react-router-dom";
import { logInReq } from "../../apis/api.js";

import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice.js";

// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function LogInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <LabeledInput
        type="text"
        id="id"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        label="이메일"
        placeholder="이메일"
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
      <Button
        onClick={() => {
          logInReq({
            email: "email",
            password: "password",
          })
            .then((res) => {
              console.log(res.data);
              navigate("/");
            })
            .catch((err) => {});
          dispatch(setEmail({ email: "email" }));
          navigate("/");
        }}
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
