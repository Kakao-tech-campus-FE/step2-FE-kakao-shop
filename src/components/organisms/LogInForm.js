// router
import { useNavigate } from "react-router-dom";
// axios
import { logInReq } from "../../apis/api.js";
// redux
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice.js";
import { isValidLogIn } from "../../utils/validate.js";

// hook
import useInput from "../../hooks/useInput.js";
// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function LogInForm() {
  const { inputValue, handleChange } = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <LabeledInput
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
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
      <Button
        onClick={() => {
          // validation
          if (!isValidLogIn(inputValue)) return;

          // log in
          logInReq({
            email: inputValue.email,
            password: inputValue.password,
          })
            .then((res) => {
              console.log(res.data);
              dispatch(setEmail({ email: inputValue.email }));
              navigate("/");
            })
            .catch((err) => {
              alert(err.response.data.error.message);
            });
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
