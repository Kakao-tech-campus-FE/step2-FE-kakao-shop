// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useFocus from "../../hooks/useFocus";
import useInput from "../../hooks/useInput";

// functions
import { login } from "../../apis/user";
import { validateEmail, validatePassword } from "../../utils/validate";
import { setLogin } from "../../utils/user";

// components
import InputGroup from "../molecules/InputGroup";
import CheckboxGroup from "../molecules/CheckboxGroup";
import Button from "../atoms/Button";
import Link from "../atoms/Link";
import FormContainer from "../atoms/FormContainer";

/**
 * 로그인 폼 컴포넌트
 * 이메일과 비밀번호를 입력받아 로그인을 시도하는 컴포넌트
 *
 * @returns {JSX.Element} - 로그인 폼 컴포넌트의 JSX 요소
 */
const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [isEmailFocus, onFocusEmail, onBlurEmail] = useFocus();
  const [isKeepLog, setIsKeepLog] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!validateEmail(value.email)) {
      const errorMessage = "카카오계정을 정확하게 입력해 주세요.";
      setErrorMessage(errorMessage);
      return;
    }

    if (!validatePassword(value.password)) {
      const errorMessage = "비밀번호가 올바르지 않습니다.";
      setErrorMessage(errorMessage);
      return;
    }

    try {
      const response = await login({
        email: value.email,
        password: value.password,
      });

      // 로그인 성공 시 쿠키에 정보 저장(이메일, 토큰)
      setLogin(value.email, response.headers.authorization, isKeepLog);

      // 메인페이지로 이동. 뒤로가기 시 로그인 페이지 못 돌아오게함
      navigate("/", { replace: true });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage =
          "카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
        setErrorMessage(errorMessage);
      }

      // 혹시 형식이 다른데 못 잡아내고 전송해서 400 에러가 뜨면 처리
      else if (error.response && error.response.status === 400) {
        const errorType = error.response.data.error.message.split(":")[1];
        if (errorType === "email") {
          const errorMessage = "카카오계정을 정확하게 입력해 주세요.";
          setErrorMessage(errorMessage);
        } else if (errorType === "password") {
          const errorMessage = "비밀번호가 올바르지 않습니다.";
          setErrorMessage(errorMessage);
        }
      }
    }
  };

  return (
    <FormContainer>
      <InputGroup
        id="email"
        type="email"
        name="email"
        value={value.email}
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        label=""
        onChange={handleOnChange}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
        className="mt-0"
      />
      {(isEmailFocus || value.email) && (
        <p className="text-xs mb-5 mt-2">
          <span className="text-red-500 font-bold">TIP</span> 카카오메일이
          있다면 메일 아이디만 입력해 보세요.
        </p>
      )}
      <InputGroup
        id="password"
        type="password"
        name="password"
        value={value.password}
        placeholder="비밀번호"
        label=""
        onChange={handleOnChange}
      />
      <div className="my-6">
        <CheckboxGroup
          name="keepLog"
          items={[
            {
              id: "keepLog",
              value: "keepLog",
              checked: isKeepLog,
              text: "로그인 상태 유지",
            },
          ]}
          onChange={(e) => setIsKeepLog(e.target.checked)}
        />
      </div>
      {errorMessage && (
        <div className="p-4 mb-10 bg-gray-100 text-sm text-red-600">
          {errorMessage}
        </div>
      )}
      <Button color="kakao" onClick={handleLogin}>
        로그인
      </Button>
      <div className="mt-8 text-xs">
        <Link to="/register">회원가입</Link>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
