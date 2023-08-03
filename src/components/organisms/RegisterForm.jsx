import InputGroup from "../molecules/InputGroup";
import Container from "../atoms/Container";
import Button from "../atoms/Button";

import { register } from "../../services/api";
import { useEffect, useState } from "react";

import useInput from "../../hooks/useInput";

const staticServerUri = process.env.REACT_APP_PATH || "";

const PW_REGEX = new RegExp(
  "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$",
);
const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
);
const NAME_REGEX = new RegExp("^[가-힣]{2,}$");

const RegisterForm = () => {
  const { value, handleOnChange, errorMsg, validateInput } = useInput({
    value: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    ERROR_MSG: {
      required: "필수 입력사항입니다.",
      password: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
      passwordConfirm: "비밀번호가 일치하지 않습니다.",
      email: "이메일 형식이 올바르지 않습니다.",
      username: "이름은 2자 이상이어야 합니다.",
    },
    constraints: {
      email: (input) => EMAIL_REGEX.test(input["email"]),
      username: (input) => NAME_REGEX.test(input["username"]),
      password: (input) => PW_REGEX.test(input["password"]),
      passwordConfirm: (input) => value["passwordConfirm"] === input.password,
    },
  });

  const [errorFromBE, setErrorFromBE] = useState(null);

  useEffect(() => {
    if (errorFromBE) {
      alert(errorFromBE);
      setErrorFromBE(null);
    }
  }, [errorFromBE]);

  return (
    <Container className={`form flex w-full flex-col gap-4`}>
      <InputGroup
        id="email"
        type="text"
        value={value.email}
        label="이메일 (아이디)"
        placeholder="이메일"
        onChange={handleOnChange}
        errorMsg={errorMsg.email}
        onBlur={() => validateInput("email")}
      />
      <InputGroup
        id="username"
        type="text"
        value={value.username}
        label="이름"
        placeholder="이름"
        onChange={handleOnChange}
        errorMsg={errorMsg.username}
        onBlur={() => validateInput("username")}
      />
      <InputGroup
        id="password"
        type="password"
        value={value.password}
        label="비밀번호"
        placeholder="비밀번호"
        onChange={handleOnChange}
        errorMsg={errorMsg.password}
        onBlur={() => validateInput("password")}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        value={value.passwordConfirm}
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        onChange={handleOnChange}
        errorMsg={errorMsg.passwordConfirm}
        onBlur={() => validateInput("passwordConfirm")}
      />

      <Button
        className="register-button mt-10 w-full rounded bg-kakao-yellow px-4 py-2 text-xl font-bold text-black"
        onClick={() => {
          if (!Object.keys(value).find((key) => validateInput(key) === false))
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            })
              .then((res) => {
                console.log(res);
                alert("회원가입이 완료되었습니다. 로그인해주세요.");
                window.location.href = staticServerUri + "/";
              })
              .catch((err) => {
                console.log(err);
                setErrorFromBE(err.response.data.error.message);
              });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};
export default RegisterForm;
