import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Text from "../atoms/Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/api";
import { setExprirationTime } from "../../utils";
import { LogIn } from "../../store/slices/userSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestError, setRequestError] = useState("");
  const { value, isValidValue, errorMsg, handleOnChange, validateInput } =
    useInput({
      email: "",
      password: "",
    });

  const handleLogin = () => {
    if (isValidValue.email === true && isValidValue.password === true) {
      login({
        email: value.email,
        password: value.password,
      })
        .then(() => {
          dispatch(LogIn()); // 로그인 상태 변경
          setExprirationTime(); // 로그인 만료 시간 설정
          navigate("/"); // 메인페이지 리다이렉트
        })
        .catch((error) => {
          console.error(error);
          if (error.code === "ECONNABORTED") {
            // TimeoutError 발생 시 처리
            console.error("요청이 시간 초과되었습니다.");
          } else {
            // 기타 에러 처리
            setRequestError(error.response.data.error.message);
          }
        });
    }
  };

  return (
    <Container className=" w-4/6 flex flex-col p-20 ">
      <InputGroup
        id="email"
        name="email"
        type="email"
        label="이메일"
        placeholder="이메일(아이디)를 입력해주세요"
        value={value.email}
        onChange={handleOnChange}
        onBlur={validateInput}
      />
      {!isValidValue.email && (
        <Text className=" text-xs text-red-600 font-semibold">
          {errorMsg.email}
        </Text>
      )}
      <InputGroup
        id="password"
        name="password"
        type="password"
        label="비밀번호"
        placeholder="********"
        value={value.password}
        onChange={handleOnChange}
        onBlur={validateInput}
      />
      {!isValidValue.password && (
        <Text className=" text-xs text-red-600 font-semibold">
          {errorMsg.password}
        </Text>
      )}
      {requestError && (
        <Text className=" text text-red-600 font-semibold p-2 text-center mt-3 ">
          {requestError}
        </Text>
      )}
      <Button
        className=" h-10 border-hidden font-semibold text-sm rounded mt-10 cursor-pointer "
        onClick={handleLogin}
        // 커스텀 스타일
        style={{ backgroundColor: "#ffe342" }}
      >
        로그인
      </Button>
    </Container>
  );
}
