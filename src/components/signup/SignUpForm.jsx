import Container from "../common/atoms/Container";
import InputGroup from "../common/molecules/InputGroup";
import Button from "../common/atoms/Button";
import useInput from "../../hooks/useInput";
import Text from "../common/atoms/Text";
import { useState, useEffect } from "react";
import { register } from "../../apis/user";
import useValidateInput from "../../hooks/useValidateInput";
import Logo from "../common/atoms/Logo";
import kakaoLogoText from "../../assets/icons/logoKakaoText.png";
import SignUpModal from "./SignUpModal";

export default function RegisterForm() {
  const [requestError, setRequestError] = useState("");
  const [isSamePW, setIsSamePw] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { isValidValue, validateInput, errorMsg } = useValidateInput({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleOnChangeAndValidate = (e) => {
    handleOnChange(e);
    validateInput(e.target.name, e.target.value);
  };

  const handleRegister = () => {
    if (
      isValidValue.username &&
      isValidValue.email &&
      isValidValue.password &&
      isValidValue.passwordConfirm
    ) {
      if (isSamePW) {
        register({
          username: value.username,
          email: value.email,
          password: value.password,
        })
          .then(() => {
            setIsSignUpModalOpen(true);
          })
          .catch((error) => {
            console.error(error.message);
            setRequestError(error.message);
          });
      }
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  useEffect(() => {
    setIsSamePw(value.password === value.passwordConfirm);
  }, [value.password, value.passwordConfirm]);

  return (
    <Container className=" flex h-screen flex-col items-center pt-[50px]">
      {isSignUpModalOpen && (
        <SignUpModal setIsSignUpModalOpen={setIsSignUpModalOpen} />
      )}
      <Logo
        src={kakaoLogoText}
        alt={"kakaoLogoText"}
        className=" w-28 pb-10"
      ></Logo>
      <Container className="flex w-[550px] flex-col gap-3 border-[1px] border-solid border-zinc-300 p-14">
        <div>
          <InputGroup
            id="username"
            name="username"
            type="text"
            label={"이름"}
            placeholder="사용자 이름을 입력해주세요"
            value={value.username}
            onChange={handleOnChangeAndValidate}
            onBlur={() => {
              validateInput("username", value.username);
            }}
            onKeyDown={handleOnKeyDown}
          />
          {!isValidValue.username && (
            <Text className=" text-xs font-semibold text-red-600">
              {errorMsg.username}
            </Text>
          )}
        </div>
        <div>
          <InputGroup
            id="email"
            name="email"
            type="email"
            label={"카카오 계정"}
            placeholder="이메일을 입력해주세요"
            value={value.email}
            onChange={handleOnChangeAndValidate}
            onBlur={() => {
              validateInput("email", value.email);
            }}
            onKeyDown={handleOnKeyDown}
          />
          {!isValidValue.email && (
            <Text className=" text-xs font-semibold text-red-600">
              {errorMsg.email}
            </Text>
          )}
        </div>
        <div>
          <InputGroup
            id="password"
            name="password"
            type="password"
            label={"비밀번호"}
            placeholder="비밀번호"
            value={value.password}
            onChange={handleOnChangeAndValidate}
            onBlur={() => {
              validateInput("password", value.password);
            }}
            onKeyDown={handleOnKeyDown}
          />
          {!isValidValue.password ? (
            <Text className=" text-xs font-semibold text-red-600">
              {errorMsg.password}
            </Text>
          ) : (
            !isSamePW && (
              <Text className=" text-xs font-semibold text-red-600">
                비밀번호가 일치하지 않습니다.
              </Text>
            )
          )}
        </div>
        <div>
          <InputGroup
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 재입력"
            value={value.passwordConfirm}
            onChange={handleOnChangeAndValidate}
            onBlur={() => {
              validateInput("passwordConfirm", value.passwordConfirm);
            }}
            onKeyDown={handleOnKeyDown}
          />
          {!isValidValue.passwordConfirm ? (
            <Text className=" text-xs font-semibold text-red-600">
              {errorMsg.passwordConfirm}
            </Text>
          ) : (
            !isSamePW && (
              <Text className=" text-xs font-semibold text-red-600">
                비밀번호가 일치하지 않습니다.
              </Text>
            )
          )}
        </div>
        {requestError && (
          <Text className=" mt-3 bg-zinc-100 p-5 text-sm text-red-600">
            {requestError}
          </Text>
        )}
        <ul className="pl-3 pt-5 text-xs tracking-tight text-zinc-500">
          <li>
            비밀번호는 8~20자리의 영문, 숫자, 특수문자를 조합하여 설정해 주세요.
          </li>
          <li>
            다른 사이트에서 사용하는 것과 동일하거나 쉬운 비밀번호는 사용하지
            마세요.
          </li>
          <li>안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해 주세요.</li>
        </ul>

        <Button
          className={`mt-3 h-10 cursor-pointer rounded border-hidden text-sm font-semibold 
          ${
            isValidValue.username &&
            isValidValue.email &&
            isValidValue.password &&
            isValidValue.passwordConfirm &&
            isSamePW
              ? "bg-[#ffe342]"
              : "bg-zinc-200"
          }`}
          onClick={handleRegister}
        >
          회원가입
        </Button>
      </Container>
    </Container>
  );
}
