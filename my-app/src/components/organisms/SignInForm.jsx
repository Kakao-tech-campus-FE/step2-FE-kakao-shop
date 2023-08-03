import Container from "../atoms/Container";
import SignInInputGroup from "../molecules/SignInInputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { useRef, useState } from "react";

const SignInForm = () => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);
  const loginRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  return (
    <Container className="border border-gray-200 flex flex-col justify-center gap-10 w-[580px] h-[480px] px-[69px]">
      <div className="input-container flex flex-col ">
        <SignInInputGroup
          className="w-[100%] h-11 outline-none border-b-2 border-gray-400 focus:border-black"
          ref={loginRef}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          id="email"
          type="email"
          label=""
          placeholder="카카오메일 아이디, 이메일, 전화번호"
          value={value.email}
          onChange={handleOnChange}
        />
        {focus && (
          <div className="tip-comment text-xs text-gray-500 font-medium py-2">
            <span className=" text-red-500 font-bold pr-2">TIP</span>
            카카오메일이 있다면 메일 아이디만 입력해 보세요.
          </div>
        )}
        <SignInInputGroup
          className="w-[100%] h-11 outline-none border-b-2 border-gray-400 focus:border-black"
          id="password"
          type="password"
          label=""
          placeholder="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
      </div>
      <div className="button-group flex flex-col items-center gap-2">
        <Button
          className="inline-block border-0 bg-yellow-300 w-[100%] py-4 hover:bg-yellow-400 focus:bg-yellow-500"
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
            navigate(staticServerUrl + "/");
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
          className="inline-block border-0 bg-gray-200 w-[100%] py-4 hover:bg-gray-300 focus:bg-gray-400"
          onClick={() => {
            console.log("QR");
          }}
        >
          QR코드 로그인
        </Button>
      </div>
      <div className="flex justify-between">
        <Button
          className="border-none text-sm text-gray-600"
          onClick={() => {
            navigate(staticServerUrl + "/signup");
          }}
        >
          회원가입
        </Button>
        <div className="">
          <span className="border-r text-sm text-gray-600 pr-2">계정 찾기</span>
          <span className="text-sm text-gray-600 pl-2">비밀번호 찾기</span>
        </div>
      </div>
    </Container>
  );
};

export default SignInForm;
