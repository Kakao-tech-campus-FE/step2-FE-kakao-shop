import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
//import { login } from "../../services/api"; //loadingRequest에서 처리했음
import Title from "../atoms/Title";
import { loginRequest } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { emailValidCheck, pwValidCheck } from "../../utils/validationCheck";
import { useState } from "react";

const LoginForm = () => {
  // 사용자 정보를 store에 저장 : dispatch를 사용하기 위해 useDispatch;
  const dispatch = useDispatch();
  // 사용자 정보를 store로 부터 불러오기 : useSelector를 사용하기 위해
  // 아래 코드의 state는 글로벌 상태를 모두 담고 있는 최상위 state
  const email = useSelector((state) => state.user.email);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  //RegisterForm에서의 validation과 코드 중복, 리팩토링 필요
  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });
  const handleLogin = () => {
    const isEmailValid = emailValidCheck(value.email);
    const isPwValid = pwValidCheck(value.password);

    setValidation({
      email: isEmailValid,
      password: isPwValid,
    });

    if (isEmailValid && isPwValid) {
      // 유효성 검사 통과, 로그인 요청
      dispatch(
        loginRequest({
          email: value.email,
          password: value.password,
        })
      );
    }
  };

  //redux-thunk 사용 이전 비동기 처리 코드, 이래의 버튼 onClick의 dispatch(loginRequest)로 대체됨
  // const loginReq = () => {
  //   login({
  //     email: value.email,
  //     password: value.password,
  //   })
  //     .then((res) => {
  //       //console.log(res);
  //       // dispatch를 이용하여 store에 email을 저장
  //       dispatch(
  //         setEmail({
  //           email: value.email,
  //         })
  //       );
  //     })
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });
  // };

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id={"email"}
        type={"email"}
        name={"email"}
        placeholder={"이메일(아이디)"}
        label={"이메일"}
        value={value.email}
        onChange={handleOnChange}
      />
      <div>{validation.email ? "" : "잘못된 이메일 형식입니다."}</div>
      <InputGroup
        id={"password"}
        type={"password"}
        name={"password"}
        placeholder={"********"}
        label={"비밀번호"}
        value={value.password}
        onChange={handleOnChange}
      />
      <div>
        {validation.password
          ? ""
          : "영문, 숫자, 특수문자가 포함되며, 8에서 20자 이내여야 합니다."}
      </div>
      <Button onClick={handleLogin}>로그인</Button>
    </Container>
  );
};
export default LoginForm;
