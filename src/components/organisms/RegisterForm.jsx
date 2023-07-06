import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import Button from "./../atoms/Button";
import useInput from "./../../hooks/useInput";
import { register } from "../services/api";
import Swal from 'sweetalert2'
// import { useEffect } from "react"; // useEffect는 오류가 발생하는 구간을 확인하는데 유용하다.

const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username: "테스터",
    email: "test222@naver.com",
    password: "test123!",
    passwordConfirm: "test123!",
  });

  // 백엔드 API 문서를 참고해보니 이메일과 비밀번호에 대한 유효성 검증이 필요한것으로 보임
  // 이메일 : 이메일 형식으로 작성
  // 비밀번호 : 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없음, 8에서 20자 이내
  // eslint-disable-next-line
  const emailValidation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const pwValidation = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;

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
          if(value.password !== value.passwordConfirm) {
            Swal.fire({
              icon:'error',
              title:'입력하신 비밀번호와 비밀번호 확인이 서로 다릅니다.',
              text:'다시 한 번 입력해주세요',
              confirmButtonText:'확인',
            })
          }
          if(!pwValidation.test(value.password)) {
            Swal.fire({
              icon:'error',
              title:'비밀번호가 올바르지 않습니다!',
              text:'비밀번호는 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없으며, 8에서 20자 이내로 작성해주세요!',
              confirmButtonText:'확인',
            })
          }
          if(!emailValidation.test(value.email)) {
            Swal.fire({
              icon:'error',
              title:'이메일이 올바르지 않습니다!',
              text:'이메일을 이메일에 맞는 올바른 형식으로 작성해주세요!',
              confirmButtonText:'확인',
            })
          }
          if(value.username.length === 0) {
            Swal.fire({
              icon:'error',
              title:'이름을 입력해주세요!',
              text:'이름을 입력하지 않으셨습니다',
              confirmButtonText:'확인',
            })
          }
          if(value.username.length !== 0 && emailValidation.test(value.email) && pwValidation.test(value.password) && value.password === value.passwordConfirm) {
            // api 회원 가입 요청!
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            })
          }
        }}>회원가입</Button>
      </Container>
    </>
  );
};

export default RegisterForm;
