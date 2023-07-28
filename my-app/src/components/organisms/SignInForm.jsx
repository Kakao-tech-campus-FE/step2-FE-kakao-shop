import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setUserInfo } from "../../store/slices/userSlice";
import { useState } from "react";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);
  const [correct, setCorrect] = useState(true);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container>
      <SignInInputGroup
        id="email"
        type="email"
        placeholder="이메일"
        label=""
        value={value.email}
        onChange={handleOnChange}
        className={correct ? "black" : "red"}
      />
      <SignInInputGroup
        id="password"
        type="password"
        placeholder="비밀번호"
        label=""
        value={value.password}
        onChange={handleOnChange}
      />
      <div className="button-group flex flex-col items-center gap-2">
        <Button
          className="inline-block border-0 bg-yellow-300 w-[100%] py-2 hover:bg-yellow-400 focus:bg-yellow-500"
          onClick={() => {
            dispatch(
              loginRequest({
                email: value.email,
                password: value.password,
              })
            );
            if (error === "error") {
              alert("로그인 에러 발생");
              return;
            }
            navigate("/");
          }}
        >
          로그인
        </Button>
        <div className="relative w-[100%] flex justify-center">
          <div className="border-t text-gray-700 absolute top-1/2 left-0 right-0 z-0"></div>
          <span className="px-2 z-10 text-xs bg-white text-gray-400 relative item">
            또는
          </span>
        </div>
        <Button
          className="inline-block border-0 bg-yellow-300 w-[100%] py-2 hover:bg-yellow-400 focus:bg-yellow-500"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Button>
      </div>
    </Container>
  );
};

export default SignInForm;
