import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import Button from "./../atoms/Button";
import useInput from "./../../hooks/useInput";
import { register } from "../services/api";
// import { useEffect } from "react"; // useEffect는 오류가 발생하는 구간을 확인하는데 유용하다.

const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 백엔드 API 문서를 참고해보니 이메일과 비밀번호에 대한 유효성 검증이 필요한것으로 보임
  // 이메일 : 이메일 형식으로 작성
  // 비밀번호 : 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없음, 8에서 20자 이내

  return (
    <>
      <Container>
        <InputGroup
          id="username"
          type="text"
          name="username"
          placeholder="사용자 이름을 입력해주세요."
          label="이름"
          value={value.username}
          onChange={handleOnChange}
        />
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일(아이디)를 입력해주세요."
          label="이메일"
          value={value.email}
          onChange={handleOnChange}
        />
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="********"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
        />
        <InputGroup
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="********"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
        />
        <Button onClick={() => {
          // api 회원 가입 요청!
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          });
        }}>회원가입</Button>
      </Container>
    </>
  );
};

export default RegisterForm;
