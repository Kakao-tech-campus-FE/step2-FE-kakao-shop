import { useState } from "react";
import { postCheck } from "@apis/postCheck";
import { postRegister } from "@apis/postRegister";
import AuthContainer from "@components/atoms/AuthContainer";
import Button from "@components/atoms/Button";
import ErrorMessage from "@components/atoms/ErrorMessage";
import InputGroup from "@components/molecules/InputGroup";
import { UseInput } from "@hooks/UseInput";
import { styled } from "styled-components";

const RegisterForm = () => {
  const { inputValue, passwordError, confirmError, onChange, onBlur } =
    UseInput({
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    });
  const [emailError, setEmailError] = useState({ isError: false, message: "" });

  return (
    <AuthContainer width={"580px"} margin={"40px auto 42px"}>
      <Wrapper>
        <InputGroup
          id={"email"}
          name={"email"}
          value={inputValue.email || ""}
          placeholder={"이메일"}
          height={"27px"}
          color={"#999"}
          fontSize={"18px"}
          label={"이메일 (아이디)"}
          onChange={onChange}
        />
        <CheckButton>
          <Button
            width={"60px"}
            height={"40px"}
            background={"#ebebeb"}
            onClick={() => {
              postCheck(inputValue.email, setEmailError);
            }}
          >
            확인
          </Button>
        </CheckButton>
        {emailError.isError && (
          <ErrorMessage>{emailError.message}</ErrorMessage>
        )}
        <InputGroup
          id={"name"}
          name={"name"}
          value={inputValue.name || ""}
          placeholder={"이름"}
          height={"27px"}
          color={"#999"}
          fontSize={"18px"}
          label={"이름"}
          onChange={onChange}
        />
        <InputGroup
          id={"password"}
          name={"password"}
          type={"password"}
          value={inputValue.password || ""}
          placeholder={"비밀번호 입력(8~20자리)"}
          height={"27px"}
          color={"#999"}
          fontSize={"18px"}
          label={"비밀번호"}
          onChange={onChange}
          onBlur={onBlur}
        />
        {passwordError && (
          <ErrorMessage>
            카카오계정 비밀번호를 입력해 주세요.(영문자/숫자/특수문자)
          </ErrorMessage>
        )}
        <InputGroup
          id={"passwordConfirm"}
          name={"passwordConfirm"}
          type={"password"}
          value={inputValue.passwordConfirm || ""}
          placeholder={"비밀번호 재입력"}
          height={"27px"}
          color={"#999"}
          fontSize={"18px"}
          label={"비밀번호 확인"}
          onChange={onChange}
          onBlur={onBlur}
        />
        {confirmError && (
          <ErrorMessage>
            입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다.
          </ErrorMessage>
        )}
        <ButtonWrapper>
          <Button
            height={"50px"}
            background={"#fee500"}
            onClick={() => {
              postRegister({
                email: inputValue.email,
                password: inputValue.password,
                username: inputValue.name,
              });
            }}
          >
            회원가입
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </AuthContainer>
  );
};

export default RegisterForm;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 440px;
  padding: 55px 69px 50px;
`;

const CheckButton = styled.div`
  position: absolute;
  top: 80px;
  right: 70px;
`;

const ButtonWrapper = styled.div`
  padding-top: 30px;
`;
