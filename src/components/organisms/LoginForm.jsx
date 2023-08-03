import InputGroup from "../molecules/InputGroup"
import useInput from "../../hooks/useInput";
import { loginApi } from "../../apis/api";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/authRedux";
  
const staticServerUrl = process.env.REACT_APP_PATH || "";

const LoginForm = () => {
  const [value, handleOnChange] = useInput({
    email:"",
    emailIsValid: false,
    password:"",
    passwordIsValid: false,
  });
  const [loginFailed, setLoginFailed] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!value.emailIsValid || !value.passwordIsValid) {
      return;
    }

    try {
      const response = await (loginApi({email: value.email, password:value.password}));
      
      const token = response.headers.authorization;
      dispatch(loginSuccess({token: token}));
      localStorage.setItem('userInfo', JSON.stringify({token: token, expirationTime: Date.now() + 1000 * 60 * 60}));
      navigate(staticServerUrl + '/');
    } catch (error) {
      setLoginFailed(error.response.data.error.message);
    }
  };

  const everythingIsValid = value.emailIsValid && value.passwordIsValid;

  return (
    <div className='relative rounded-md flex flex-col items-center m-5 my-10'>
      <form>
        <div>
        <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.email && (value.emailIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="email" type="email" placeholder="이메일" autocomplete="email" value={value.email} onChange={handleOnChange}/>
        {!value.email && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.email && (
            value.emailIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">이메일이 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">이메일이 유효하지 않습니다</span>
            )
          )}
        </div>

        <div>
        <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.password && (value.passwordIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="password" type="password" placeholder="비밀번호" autocomplete="current-password" value={value.password} onChange={handleOnChange}/>
        {!value.password && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.password && (
            value.passwordIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">비밀번호가 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">비밀번호가 유효하지 않습니다</span>
            )
          )}
        </div>
      </form>

      <span className="text-red-500 text-xs block h-2">{loginFailed}</span>
      
      {everythingIsValid ? 
      <button
        className="w-96 m-2 pr-6 pl-6 p-2 bg-yellow-300 hover:bg-yellow-400 rounded-md mb-10"
        onClick={handleLogin}>
          로그인
      </button> :
        
      <button
        className="w-96 m-2 pr-6 pl-6 p-2 bg-yellow-300 text-gray-400 cursor-default rounded-md mb-10"
        >
          로그인
      </button>}
    <div className="absolute left-2 bottom-0">
      <Link to='/register'><span className="text-sm">회원가입</span></Link>
      </div>
    </div>

  );
}
export default LoginForm;