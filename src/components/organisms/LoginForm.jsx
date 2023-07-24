import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Text from "../atoms/Text";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../apis/user";
import { LogIn } from "../../store/slices/userSlice";
import useValidateInput from "../../hooks/useValidateInput";
import Logo from "../atoms/Logo";
import kakaoLogoText from "../../assets/icons/logoKakaoText.png";
import Box from "../atoms/Box";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFailLogin, setIsFailLogin] = useState(false); // 로그인 실패시 메시지 출력
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const { isValidValue, validateInput } = useValidateInput();

  const handleOnChangeValidate = (e) => {
    handleOnChange(e);
    validateInput(e.target.name, e.target.value);
  };

  const handleLogin = async () => {
    try {
      // 유효하지 않는 입력일 경우 로그인 요청을 보내지 않고 Client단에서 에러메시지 출력
      if (!isValidValue.email || !isValidValue.password) {
        console.log("LoginForm: Client단에서 유효하지 않는 입력입니다.");
        setIsFailLogin(true);
        return;
      }
      await login({
        email: value.email,
        password: value.password,
      });
      dispatch(LogIn()); // 로그인 상태 변경
      navigate("/"); // 메인페이지 리다이렉트
    } catch (error) {
      console.log("LoginForm error", error);
      setIsFailLogin(true);
      if (error.code === "ECONNABORTED") {
        console.error("요청이 시간 초과되었습니다.");
      }
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container className=" flex flex-col items-center h-screen pt-[100px]">
      <Logo
        src={kakaoLogoText}
        alt={"kakaoLogoText"}
        className=" w-28 pb-10"
      ></Logo>
      <Container className="flex flex-col p-14 w-[550px] border-[1px] border-solid border-zinc-300 gap-2">
        {/* 이메일, 비밀번호 영역 */}
        <InputGroup
          id="email"
          name="email"
          type="email"
          label="이메일"
          placeholder="카카오메일 아이디, 이메일, 전화번호"
          value={value.email}
          onChange={handleOnChangeValidate}
          onBlur={() => {}}
          onKeyDown={handleOnKeyDown}
        />
        <InputGroup
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호"
          value={value.password}
          onChange={handleOnChangeValidate}
          onBlur={() => {}}
          onKeyDown={handleOnKeyDown}
        />
        {/* 로그인 요청 실패시 출력 메세지 */}
        {isFailLogin && (
          <Text className=" text-sm text-red-600 p-5 mt-3 bg-zinc-100">
            카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시
            확인해 주세요.
          </Text>
        )}
        {/* 버튼 영역 */}
        <Button
          className=" h-12 border-hidden font-semibold text-sm rounded cursor-pointer bg-[#ffe342] mt-5"
          onClick={handleLogin}
        >
          로그인
        </Button>
        <Box className="flex ">
          <div className="grow border-solid h-1/2 border-0 border-b-[1px] border-zinc-200"></div>
          <span className="text-xs px-2">또는</span>
          <div className="grow border-solid h-1/2 border-0 border-b-[1px] border-zinc-200"></div>
        </Box>
        <Button
          className=" h-12 border-hidden font-semibold text-sm rounded cursor-pointer bg-[#f0f0f0] "
          onClick={handleLogin}
        >
          QR코드 로그인
        </Button>
        {/* 회원가입, 계정 찾기, 비밀번호 찾기 */}
        <Box className="text-xs flex justify-between font-semibold pt-5">
          <Link className=" no-underline text-black " to={"/signup"}>
            회원가입
          </Link>
          <div>
            <span className="pr-3">계정 찾기</span>
            <span className="pl-3">비밀번호 찾기</span>
          </div>
        </Box>
      </Container>
    </Container>
  );
}
