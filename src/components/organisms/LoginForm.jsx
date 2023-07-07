import Container from "./../atoms/Container";
import InputGroup from "./../molecules/InputGroup";
import Button from "./../atoms/Button";
import useInput from "./../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import Swal from 'sweetalert2'
// import { login } from "../services/api";
// import { loginRequest, setEmail } from "../../store/slices/userSlice";

const LoginForm = () => {
  // reducer 함수를 호출하기 위해서는 dispatch를 호출해야한다!(규칙)
  const dispatch = useDispatch();

  // redux에서 값을 가져올때는 useSelector라는 훅을 사용한다.
  // 여기에서 사용하는 state는 모든 변수를 다담고 있는 state이다.
  // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다!
  const email = useSelector((state) => state.user.email);

  const [value, handleOnChange] = useInput({
    email: "test@naver.com",
    password: "test123!",
  });

  // 이메일 : 이메일 형식으로 작성
  // 비밀번호 : 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없음, 8에서 20자 이내
  // eslint-disable-next-line
  const emailValidation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const pwValidation = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;

  // const loginReq = () => {
  //   login({
  //     email: value.email,
  //     password: value.password,
  //   })
  //     .then((res) => {
  //       console.log(res);

  //       // dispatch의 reducer함수를 통해 넣는 값이 payload가 된다.
  //       // 정상적으로 참조할 수 있도록 객체 형태로 email이라는 키에 대한 값을 넣어준다.
  //       dispatch(setEmail({
  //         email: value.email,
  //       }))
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     })
  // }

  return (
    <>
      <Container>
        <Title></Title>
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
        <Button
          onClick={() => {
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
            if(emailValidation.test(value.email) && pwValidation.test(value.password)) {
              // api 로그인 요청 - fetch 혹은 axios
              dispatch(
                loginRequest({
                  email: value.email,
                  password: value.password,
                })
              )
            }
          }}
        >
          로그인
        </Button>
      </Container>
    </>
  );
};

export default LoginForm;
