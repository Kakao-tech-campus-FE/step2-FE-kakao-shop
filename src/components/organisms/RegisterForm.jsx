import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import useInput from "./../../hooks/useInput";
import Swal from 'sweetalert2'
import { emailValidation, pwValidation, emailErrorMessage, passwordErrorMessage, usernameErrorMessage, passwordComparisonErrorMessage } from "../../utils/constants";
import { register } from "../services/user";
import { styled } from "styled-components";

const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username: "테스터",
    email: "test@naver.com",
    password: "test123!",
    passwordConfirm: "test123!",
  });

  const handleClick = () => {
    if(value.password !== value.passwordConfirm) {
      Swal.fire(passwordComparisonErrorMessage)
    }
    if(!pwValidation.test(value.password)) {
      Swal.fire(passwordErrorMessage);
    }
    if(!emailValidation.test(value.email)) {
      Swal.fire(emailErrorMessage);
    }
    if(value.username.length === 0) {
      Swal.fire(usernameErrorMessage);
    }
    if(value.username.length !== 0 && emailValidation.test(value.email) && pwValidation.test(value.password) && value.password === value.passwordConfirm) {
      // api 회원 가입 요청!
      register({
        email: value.email,
        password: value.password,
        username: value.username,
      })
    }
  }

  return (
    <RegisterFormContainer>
      <RegisterFormContentBox>
        <p>회원가입</p>
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
        <RegisterButton onClick={handleClick}>회원가입</RegisterButton>
      </RegisterFormContentBox>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

const RegisterFormContainer = styled(Container)`
  margin: 0 auto;
  width: 50%;
  border: 1px solid #ddd;
  & > span {
    font-size: 2.2rem;
  }
`

const RegisterFormContentBox = styled.div`
  padding : 3% 30%;
  & > p {
    text-align: center;
    font-size : 2.2rem;
  }
`
const RegisterButton = styled.div`
    width: 100%;
    margin-top : 20px;
    padding: 8px 0 8px 0;
    text-align: center;
    cursor: pointer;
    background-color : #ffe100
`