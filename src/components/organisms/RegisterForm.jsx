import Container from "../atoms/Container";
import InputGroup from "../moleclules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../apis/user";
import { loginRequest } from "../../store/slices/userSlice";
import useValid from "../../hooks/useValid";
import Modal from "../moleclules/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// 유효성 검사의 에러 메세지
const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidEmail: "이메일 형식이 올바르지 않습니다.",
  invalidPw: "8~20자 영문, 숫자, 특수문자를 사용하세요.",
  invalidPwConfirm: "비밀번호가 일치하지 않습니다.",
  duplicateEmail: "이미 사용 중인 이메일입니다.",
  notConfirmed: "이메일 중복확인을 해주세요.",
};

const RegisterForm = () => {
  // 전역 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // input 값, 유효성 검사, 모달 상태
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [modal, setModal] = useState("");
  const { valid, handleOnBlur, handleOnClick } = useValid(
    {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    value,
    setModal
  );
  const isAllValid = Object.values(valid).every((value) => value === true);

  // 회원가입 API
  const handleRegister = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    }).then((res) => {
      if (res.status === 200) {
        setModal("complete");
        dispatch(
          loginRequest({
            email: value.email,
            password: value.password,
          })
        );
      }
    });
  };

  return (
    <>
      <Title></Title>
      <Container type={"form"}>
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
          onChange={(e) => {
            handleOnChange(e);
            handleOnBlur(e);
          }}
          onBlur={handleOnBlur}
          onClick={handleOnClick}
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
          onChange={(e) => {
            handleOnChange(e);
            handleOnBlur(e);
          }}
        ></InputGroup>
        <Button valid={isAllValid} className={"mt-10"} onClick={handleRegister}>
          회원가입
        </Button>
      </Container>

      {/* 모달의 상태에 따라 서로 다른 모달창 */}
      {modal === "complete" && (
        <Modal
          titleText={"환영합니다!"}
          contentText={"카카오톡 쇼핑하기 가입이 완료되었습니다."}
          buttonText={"시작하기"}
          onClick={() => {
            navigate("/", { replace: true });
            window.location.reload(false);
          }}
          type={modal}
          setModal={setModal}
        ></Modal>
      )}
      {modal === "duplicateEmail" && (
        <Modal
          titleText={"이미 사용 중인 이메일입니다."}
          contentText={
            "등록된 이메일로 로그인하거나, 다른 이메일 주소를 입력해 주세요."
          }
          buttonText={"로그인"}
          onClick={() => {
            navigate("/login", { replace: false });
          }}
          type={"two"}
          secondButton={"다시 입력"}
          setModal={setModal}
        ></Modal>
      )}
      {modal === "goodEmail" && (
        <Modal
          titleText={"사용 가능한 이메일입니다."}
          buttonText={"확인"}
          onClick={() => {
            setModal("");
          }}
          type={modal}
          setModal={setModal}
        ></Modal>
      )}
    </>
  );
};

export default RegisterForm;
