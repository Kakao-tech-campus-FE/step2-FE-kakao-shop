import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logInReq } from "apis/user.js";
import { setEmail, setLogInTime, setToken } from "store/slices/userSlice.js";
import { isValidLogIn } from "utils/validate.js";
import useInput from "hooks/useInput.js";

import Container from "components/atoms/Container.js";
import Button from "components/atoms/Button.js";
import LabeledInput from "components/molecules/LabeledInput.js";
import { expireTime } from "utils/constants";

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
      .then((res) => {
        const CurrentTime = new Date().getTime();
        dispatch(setEmail({ email: inputValue.email }));
        dispatch(setToken({token: res.headers.authorization}))
        dispatch(setLogInTime({ logInTime: CurrentTime }));
        setTimeout(() => {
          dispatch(setEmail({ email: null }));
          dispatch(setLogInTime({ logInTime: null }));
          alert("로그인이 만료되었습니다.");
          window.location.href = "/";
        }, expireTime);
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
