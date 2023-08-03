import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logInReq } from "apis/user.js";
import { setEmail, setLogInTime } from "store/slices/userSlice.js";
import { isValidLogIn } from "utils/validate.js";
import { useInput } from "hooks/useInput.js";
import { expireTime } from "utils/constants.js";

import Container from "components/atoms/Container.js";
import Button from "components/atoms/Button.js";
import Input from "components/atoms/Input.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

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
        dispatch(setLogInTime({ logInTime: CurrentTime }));
        window.localStorage.setItem("token", res.headers.authorization);
        setTimeout(() => {
          dispatch(setEmail({ email: null }));
          dispatch(setLogInTime({ logInTime: null }));
          window.localStorage.removeItem("token");
          alert("로그인이 만료되었습니다.");
          window.location.href = staticServerUri + "/";
        }, expireTime);
        navigate(staticServerUri + "/");
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
        type="text"
        name="email"
        onChange={handleInputChange}
        placeholder="이메일"
        value={inputValue.email}
      />
      <Input
        className="block w-full mb-12 p-2 border-b-2 text-lg"
        type="password"
        name="password"
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp}
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <Button
        className="block w-full py-2 bg-yellow-300 rounded text-lg"
        onClick={handleButtonClick}
      >
        로그인
      </Button>
      <p className="my-4 text-xs text-gray-400">
        <span className="inline-block w-[45%] h-[1px] border-b" />
        <span className="inline-block w-[10%]">또는</span>
        <span className="inline-block w-[45%] h-[1px] border-b" />
      </p>
      <Button
        className="block w-full py-2 bg-gray-100 rounded text-lg"
        onClick={() => {
          navigate(staticServerUri + "/signup");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
