import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import useInput from "./../../hooks/useInput";
import Swal from 'sweetalert2'
import { emailValidation, pwValidation, emailErrorMessage, passwordErrorMessage } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import { styled } from "styled-components";
// import Title from "../atoms/Title";
// import { login } from "../services/api";
// import { loginRequest, setEmail } from "../../store/slices/userSlice";

const LoginForm = () => {
  // reducer 함수를 호출하기 위해서는 dispatch를 호출해야한다!(규칙)
  const dispatch = useDispatch();

  // redux에서 값을 가져올때는 useSelector라는 훅을 사용한다.
  // 여기에서 사용하는 state는 모든 변수를 다담고 있는 state이다.
  // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다!
  // const email = useSelector((state) => state.user.email);

  const [value, handleChange] = useInput({
    email: "",
    password: "",
  });

  const handleClick = () => {
    if(!pwValidation.test(value.password)) {
      Swal.fire(passwordErrorMessage)
    }
    if(!emailValidation.test(value.email)) {
      Swal.fire(emailErrorMessage)
    }
    if(emailValidation.test(value.email) && pwValidation.test(value.password)) {
      // api 로그인 요청 - fetch 혹은 axios
      dispatch(
        loginRequest({
          email: value.email,
          password: value.password,
        })
      )
    }
  }

  /*
  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        console.log(res);

        // dispatch의 reducer함수를 통해 넣는 값이 payload가 된다.
        // 정상적으로 참조할 수 있도록 객체 형태로 email이라는 키에 대한 값을 넣어준다.
        dispatch(setEmail({
          email: value.email,
        }))
      })
      .catch((err) => {
        console.log("err", err);
      })
  }
  */

  return (
    <LoginFormContainer>
      <LoginFormContentBox>
        <p>로그인</p>
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일(아이디)를 입력해주세요."
          label="이메일"
          value={value.email}
          onChange={handleChange}
        />
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="********"
          label="비밀번호"
          value={value.password}
          onChange={handleChange}
        />
        <LoginButton onClick={handleClick}>
          로그인
        </LoginButton>
      </LoginFormContentBox>
    </LoginFormContainer>
  );
};

export default LoginForm;

const LoginFormContainer = styled(Container)`
  margin: 0 auto;
  width: 50%;
  border: 1px solid #ddd;
  & > span {
    font-size: 2.2rem;
  }
`

const LoginFormContentBox = styled.div`
  padding : 3% 30%;
  & > p {
    text-align: center;
    font-size : 2.2rem;
  }
`

const LoginButton = styled.div`
    width: 100%;
    margin-top : 20px;
    padding: 8px 0 8px 0;
    text-align: center;
    cursor: pointer;
    background-color : #ffe100
`