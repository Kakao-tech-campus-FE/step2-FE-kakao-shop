import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Text from "../atoms/Text";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../services/user";
import { LogIn } from "../../store/slices/userSlice";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestError, setRequestError] = useState("");
  const [isSamePW, setIsSamePw] = useState(false);
  const { value, isValidValue, errorMsg, handleOnChange, validateInput } =
    useInput({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });

  const handleRegister = () => {
    if (
      isValidValue.username &&
      isValidValue.email &&
      isValidValue.password &&
      isValidValue.passwordConfirm
    ) {
      if (isSamePW) {
        register({
          email: value.email,
          username: value.username,
          password: value.password,
        })
          .then(() => {
            dispatch(LogIn()); // 로그인 상태 변경
            navigate("/"); // 메인페이지 리다이렉트
          })
          .catch((error) => {
            console.error(error);
            // TimeoutError 발생 시 처리
            if (error.code === "ECONNABORTED") {
              console.error("요청이 시간 초과되었습니다.");
            } else {
              setRequestError(error.data.error.message);
            }
          });
      }
    }
  };

  useEffect(() => {
    setIsSamePw(value.password === value.passwordConfirm);
  }, [value.password, value.passwordConfirm]);

  return (
    <Container className=" absolute inset-0 flex justify-center">
      <Container className="flex flex-col p-20 w-4/6">
        <InputGroup
          id="username"
          name="username"
          type="text"
          label="이름"
          placeholder="사용자 이름을 입력해주세요"
          value={value.username}
          onChange={handleOnChange}
          onBlur={validateInput}
        />
        {!isValidValue.username && (
          <Text className=" text-xs text-red-600 font-semibold">
            {errorMsg.username}
          </Text>
        )}
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
        {!isValidValue.password ? (
          <Text className=" text-xs text-red-600 font-semibold">
            {errorMsg.password}
          </Text>
        ) : (
          !isSamePW && (
            <Text className=" text-xs text-red-600 font-semibold">
              비밀번호가 일치하지 않습니다.
            </Text>
          )
        )}
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="********"
          value={value.passwordConfirm}
          onChange={handleOnChange}
          onBlur={validateInput}
        />
        {!isValidValue.passwordConfirm ? (
          <Text className=" text-xs text-red-600 font-semibold">
            {errorMsg.passwordConfirm}
          </Text>
        ) : (
          !isSamePW && (
            <Text className=" text-xs text-red-600 font-semibold">
              비밀번호가 일치하지 않습니다.
            </Text>
          )
        )}
        {requestError && (
          <Text className=" text text-red-600 font-semibold p-2 text-center mt-3 ">
            {requestError}
          </Text>
        )}
        <Button
          className=" h-10 border-hidden font-semibold text-sm rounded mt-10 cursor-pointer "
          onClick={handleRegister}
          // 커스텀 스타일
          style={{ backgroundColor: "#ffe342" }}
        >
          회원가입
        </Button>
      </Container>
    </Container>
  );
}
