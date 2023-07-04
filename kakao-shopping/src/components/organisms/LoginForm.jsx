import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { loginApi } from "../../apis/api";
import { loginSuccess, login } from "../../actions/authActions";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux";
const LoginForm = () => {

  const [value, handleOnChange] = useInput({
    email:"",
    emailIsValid: '',
    password:"",
    passwordIsValid: '',
  });

  const dispatch = useDispatch();

  return (
    <Container>
      
      <Title>로그인</Title>

      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" value={value.email} onChange={handleOnChange}/>
      {!value.email && <span className="text-black-500 text-xs block">이메일을 입력해주세요</span>}
      {value.email && (
        value.emailIsValid ? (
          <span className="text-green-500 text-xs block">이메일이 유효합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">이메일이 유효하지 않습니다</span>
        )
      )}

      <InputGroup id="password" type="password" placeholder="비밀번호"  label="비밀번호" value={value.password} onChange={handleOnChange}/>
      {!value.password && <span className="text-black-500 text-xs block">비밀번호를 입력해주세요</span>}
      {value.password && (
        value.passwordIsValid ? (
          <span className="text-green-500 text-xs block">비밀번호가 유효합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">비밀번호가 유효하지 않습니다</span>
        )
      )}

      <Button
        onClick={() => {
          if(!value.emailIsValid || !value.passwordIsValid) 
            return;
          dispatch(loginSuccess());
          dispatch(login());
          loginApi({
            email:value.email,
            password: value.username
          })
        }}
        >로그인</Button>
    </Container>
  );
}
export default LoginForm;