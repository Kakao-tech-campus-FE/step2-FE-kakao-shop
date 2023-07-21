import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "@components/atoms/AuthContainer";
import Input from "@components/atoms/Input";
import AuthLink from "@components/molecules/AuthLink";
import CheckBox from "@components/molecules/CheckBox";
import ConfirmButton from "@components/molecules/ConfirmButton";
import { useInput } from "@hooks/useInput";
import { styled } from "styled-components";
import { postLogin } from "@apis/postLogin";
import ErrorMessage from "@components/atoms/ErrorMessage";

const LoginForm = () => {
  const { inputValue, onChange } = useInput({ email: "", password: "" });
  const [loginError, setLoginError] = useState({ isError: false, message: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await postLogin(inputValue);
      localStorage.setItem("timeStamp", new Date().getTime().toString());
      localStorage.setItem("token", res.headers.authorization);
      setLoginError((prev) => ({ ...prev, isError: false }));
      navigate("/");
    } catch (err) {
      setLoginError((prev) => ({
        ...prev,
        isError: true,
        message: (err as Error).message,
      }));
    }
  };

  return (
    <AuthContainer width={"580px"} margin={"40px auto 42px"}>
      <Wrapper>
        <Input
          name={"email"}
          value={inputValue.email || ""}
          placeholder={"카카오메일 아이디, 이메일, 전화번호"}
          height={"27px"}
          fontSize={"18px"}
          onChange={onChange}
        />
        <Input
          type={"password"}
          name={"password"}
          value={inputValue.password || ""}
          placeholder={"비밀번호"}
          height={"27px"}
          fontSize={"18px"}
          onChange={onChange}
        />
        <BoxWrapper>
          <CheckBox
            data={{ id: "4", name: "food", value: "밥" }}
            color={"#fee500"}
            label={"로그인 상태 유지"}
          />
        </BoxWrapper>
        {loginError.isError && (
          <ErrorWrapper>
            <ErrorMessage>{loginError.message}</ErrorMessage>
          </ErrorWrapper>
        )}
        <ConfirmButton onClick={handleLogin} />
        <AuthLink />
      </Wrapper>
    </AuthContainer>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  width: 440px;
  padding: 55px 69px 50px;
`;

const BoxWrapper = styled.div`
  margin-top: 25px;
`;

const ErrorWrapper = styled.div`
  transform: translateY(30px);
`;
