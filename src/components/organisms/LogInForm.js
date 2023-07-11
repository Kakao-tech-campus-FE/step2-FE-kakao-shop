import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logInReq } from "../../apis/api.js";
import { setEmail, setExpire } from "../../store/slices/userSlice.js";
import { isValidLogIn } from "../../utils/validate.js";
import useInput from "../../hooks/useInput.js";

import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function LogInForm() {
  const { inputValue, handleInputChange } = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    // validation
    if (!isValidLogIn(inputValue)) return;

    // log in
    logInReq({
      email: inputValue.email,
      password: inputValue.password,
    })
      .then(() => {
        dispatch(setEmail({ email: inputValue.email }));
        dispatch(setExpire({ expire: new Date().getTime() }));
        setTimeout(() => {
          dispatch(setEmail({ email: null }));
          dispatch(setExpire({ expire: null }));
          navigate("/");
        }, 1000 * 60 * 60 * 24);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };

  return (
    <Container>
      <LabeledInput
        type="text"
        id="email"
        name="email"
        onChange={handleInputChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
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
      <Button onClick={handleButtonClick}>로그인</Button>
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
