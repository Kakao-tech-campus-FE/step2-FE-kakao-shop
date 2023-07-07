import Container from "../atoms/Container";
import InputGroup from "../moleclules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../apis/api";
import useValid from "../../hooks/useValid";
import Modal from "../moleclules/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidEmail: "이메일 형식이 올바르지 않습니다.",
  invalidPw: "8~20자 영문, 숫자, 특수문자를 사용하세요.",
  invalidPwConfirm: "비밀번호가 일치하지 않습니다.",
};

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const { valid, handleOnBlur } = useValid(
    {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    value
  );
  const [modal, setModal] = useState("");
  const allValid = Object.values(valid).every((value) => value === true);
  const navigate = useNavigate();

  const handleRegister = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    }).then((res) => {
      switch (res) {
        case "complete":
          setModal("complete");
          break;
        case "duplicateEmail":
          setModal("duplicateEmail");
          break;
        default:
          return;
      }
    });
  };
  const changeModal = () => {
    switch (modal) {
      case "complete":
        return (
          <Modal
            titleText={"환영합니다!"}
            contentText={"카카오톡 쇼핑하기 가입이 완료되었습니다."}
            buttonText={"시작하기"}
            onClick={() => {
              navigate("/", { replace: true });
            }}
            type={modal}
            setModal={setModal}
          ></Modal>
        );
      case "duplicateEmail":
        return (
          <Modal
            titleText={"이미 사용 중인 이메일입니다."}
            contentText={
              "등록된 이메일로 로그인하거나, 다른 이메일 주소를 입력해 주세요."
            }
            buttonText={"로그인"}
            onClick={() => {
              navigate("/login", { replace: false });
            }}
            type={modal}
            setModal={setModal}
          ></Modal>
        );

      default:
        return;
    }
  };

  return (
    <>
      <Container>
        <Title></Title>
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="이메일 입력"
          label="이메일(아이디)"
          form="register"
          errorMsg={ERROR_MSG}
          valid={valid}
          value={value.email}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        ></InputGroup>
        <InputGroup
          id="username"
          name="username"
          type="text"
          placeholder="이름 입력"
          label="이름"
          form="register"
          errorMsg={ERROR_MSG}
          valid={valid}
          value={value.username}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        ></InputGroup>
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호 입력"
          label="비밀번호"
          form="register"
          errorMsg={ERROR_MSG}
          valid={valid}
          value={value.password}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        ></InputGroup>
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 재입력"
          label="비밀번호 확인"
          form="register"
          errorMsg={ERROR_MSG}
          valid={valid}
          value={value.passwordConfirm}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        ></InputGroup>
        <Button valid={allValid} className={"mt-10"} onClick={handleRegister}>
          회원가입
        </Button>
      </Container>
      {changeModal()}
    </>
  );
};

export default RegisterForm;
