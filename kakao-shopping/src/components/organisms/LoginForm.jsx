import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginForm = () => {

  const [value, handleOnChange] = useInput({
    email:"",
    emailIsValid: '',
    password:"",
    passwordIsValid: '',
  });
  const [LoginFailed, setLoginFailed] = useState('');
  const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!value.emailIsValid || !value.passwordIsValid) {
      return;
    }

    try {
      await dispatch(login(value.email, value.password));
      console.log("로그인 성공");
    } catch (error) {
      console.error(error);
      setLoginFailed('로그인 실패');
    }
  };

  return (
    <Container className='rounded-md flex flex-col items-center justify-center h-48'>
      <form>
        <Container>
        <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.email && (value.emailIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="email" type="email" placeholder="이메일" autocomplete="email" value={value.email} onChange={handleOnChange}/>
        {!value.email && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.email && (
            value.emailIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">이메일이 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">이메일이 유효하지 않습니다</span>
            )
          )}
        </Container>

        <Container>
        <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.password && (value.passwordIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="password" type="password" placeholder="비밀번호" autocomplete="current-password" value={value.password} onChange={handleOnChange}/>
        {!value.password && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.password && (
            value.passwordIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">비밀번호가 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">비밀번호가 유효하지 않습니다</span>
            )
          )}
        </Container>
      </form>

      <span className="text-red-500 text-xs block h-2">{LoginFailed}</span>
      
      <Button
        className="w-96 m-2 pr-6 pl-6 p-2 bg-yellow-300 hover:bg-yellow-400 rounded-md"
        onClick={handleLogin}
        >로그인</Button>
    </Container>
  );
}
export default LoginForm;