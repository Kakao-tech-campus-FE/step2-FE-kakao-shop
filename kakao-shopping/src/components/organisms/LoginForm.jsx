import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { loginApi } from "../../apis/api";
import { loginSuccess, login } from "../../actions/authActions";
import { useDispatch } from "react-redux";

const LoginForm = () => {

  const [value, handleOnChange] = useInput({
    email:"",
    emailIsValid: '',
    password:"",
    passwordIsValid: '',
  });

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e);

    console.log('API URL:', process.env.REACT_APP_API_URL);
    if (!value.emailIsValid || !value.passwordIsValid) {
      return;
    }

    try {
      await dispatch(login(value.email, value.password));
      console.log("로그인 성공");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className='bg-slate-100 rounded-md flex flex-col items-center justify-center h-48'>
      <form>
        <Container>
        <InputGroup className="mt-2 mb-2" id="email" type="email" placeholder="이메일" autocomplete="email" value={value.email} onChange={handleOnChange}/>
        {!value.email && <span className="text-black-500 text-xs block">이메일을 입력해주세요</span>}
        {value.email && (
          value.emailIsValid ? (
            <span className="text-green-500 text-xs block">이메일이 유효합니다</span>
          ) : (
            <span className="text-red-500 text-xs block">이메일이 유효하지 않습니다</span>
          )
        )}
        </Container>

        <Container>
        <InputGroup className="mt-2 mb-2" id="password" type="password" placeholder="비밀번호" autocomplete="current-password" value={value.password} onChange={handleOnChange}/>
        {!value.password && <span className="text-black-500 text-xs block">비밀번호를 입력해주세요</span>}
        {value.password && (
          value.passwordIsValid ? (
            <span className="text-green-500 text-xs block">비밀번호가 유효합니다</span>
          ) : (
            <span className="text-red-500 text-xs block">비밀번호가 유효하지 않습니다</span>
          )
        )}
        </Container>
      </form>

      <Button
        className="pr-6 pl-6 m-2 p-1 bg-slate-300 hover:bg-slate-400 rounded-md"
        onClick={handleLogin}
        >로그인</Button>
    </Container>
  );
}
export default LoginForm;