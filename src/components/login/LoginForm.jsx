import Container from "../common/atoms/Container";
import InputGroup from "../common/molecules/InputGroup";
import Button from "../common/atoms/Button";
import useInput from "../../hooks/useInput";
import Text from "../common/atoms/Text";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../apis/user";
import { LogIn } from "../../store/slices/userSlice";
import useValidateInput from "../../hooks/useValidateInput";
import Logo from "../common/atoms/Logo";
import kakaoLogoText from "../../assets/icons/logoKakaoText.png";
import Box from "../common/atoms/Box";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFailLogin, setIsFailLogin] = useState(false); // 로그인 실패시 메시지 출력
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const { isValidValue, validateInput } = useValidateInput({
    email: false,
    password: false,
  });

  const handleOnChangeAndValidate = (e) => {
    handleOnChange(e);
    validateInput(e.target.name, e.target.value);
  };

  const handleLogin = async () => {
    try {
      // 유효하지 않는 입력일 경우 로그인 요청을 보내지 않고 Client단에서 에러메시지 출력
      if (!isValidValue.email || !isValidValue.password) {
        // console.log("LoginForm: Client단에서 유효하지 않는 입력입니다.");
        setIsFailLogin(true);
        return;
      }
      await login({
        email: value.email,
        password: value.password,
      });
      dispatch(LogIn()); // 로그인 상태 변경
      navigate(staticServerUrl + "/"); // 메인페이지 리다이렉트
    } catch (error) {
      console.error(error.message);
      setIsFailLogin(true);
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container className=" flex h-screen flex-col items-center pt-[100px]">
      <Logo
        src={kakaoLogoText}
        alt={"kakaoLogoText"}
        className=" w-28 pb-10"
      ></Logo>
      <Container className="flex w-[550px] flex-col gap-2 border-[1px] border-solid border-zinc-300 p-14">
        {/* 이메일, 비밀번호 영역 */}
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="카카오메일 아이디, 이메일, 전화번호"
          value={value.email}
          onChange={handleOnChangeAndValidate}
          onBlur={() => {}}
          onKeyDown={handleOnKeyDown}
        />
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={value.password}
          onChange={handleOnChangeAndValidate}
          onBlur={() => {}}
          onKeyDown={handleOnKeyDown}
        />
        {/* 로그인 요청 실패시 출력 메세지 */}
        {isFailLogin && (
          <Text className=" mt-3 bg-zinc-100 p-5 text-sm text-red-600">
            카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시
            확인해 주세요.
          </Text>
        )}
        {/* 버튼 영역 */}
        <Button
          className=" mt-5 h-12 cursor-pointer rounded border-hidden bg-[#ffe342] text-sm font-semibold"
          onClick={handleLogin}
        >
          로그인
        </Button>
        <Box className="flex ">
          <div className="h-1/2 grow border-0 border-b-[1px] border-solid border-zinc-200"></div>
          <span className="px-2 text-xs">또는</span>
          <div className="h-1/2 grow border-0 border-b-[1px] border-solid border-zinc-200"></div>
        </Box>
        <Button
          className=" h-12 cursor-pointer rounded border-hidden bg-[#f0f0f0] text-sm font-semibold "
          onClick={handleLogin}
        >
          QR코드 로그인
        </Button>
        {/* 회원가입, 계정 찾기, 비밀번호 찾기 */}
        <Box className="flex justify-between pt-5 text-xs font-semibold">
          <Link
            className=" text-black no-underline "
            to={staticServerUrl + "/signup"}
          >
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
