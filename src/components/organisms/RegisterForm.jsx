import Container from "../atoms/Container";
import InputGroup from "../moleclules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register, login } from "../../apis/api";
import useValid from "../../hooks/useValid";
import Modal from "../moleclules/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
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
  // 모달 상태
  const [modal, setModal] = useState("");

  // form value state
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  // 유효성 검사 상태 -
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
  // 모든 유효성 검사 통과했는지 -> 버튼 활성화
  const allValid = Object.values(valid).every((value) => value === true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 회원가입 API 요청
  const handleRegister = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    }).then((res) => {
      // 회원가입 성공시
      if (res === "complete") {
        setModal("complete");
        // 회원가입 성공시, 자동으로 로그인
        login({
          email: value.email,
          password: value.password,
        }).then((res) => {
          dispatch(setUser({ email: value.email, token: res.token }));
        });
      }
    });
  };
  // 상태에 따라 다른 모달창 출력
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
      case "goodEmail":
        return (
          <Modal
            titleText={"사용 가능한 이메일입니다."}
            buttonText={"확인"}
            onClick={() => {
              setModal("");
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
      <Title></Title>
      <Container>
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
        <Button valid={allValid} className={"mt-10"} onClick={handleRegister}>
          회원가입
        </Button>
      </Container>
      {changeModal()}
    </>
  );
};

export default RegisterForm;
