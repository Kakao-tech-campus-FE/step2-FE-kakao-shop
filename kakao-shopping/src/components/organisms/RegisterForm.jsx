import InputGroup from "../molecules/InputGroup"
import useInput from "../../hooks/useInput";
import { register, checkDuplicateEmail } from "../../apis/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username:'',
    usernameIsValid:'',
    email:'',
    emailIsValid: '',
    password:'',
    passwordIsValid: '',
    passwordConfirm:'',
  })
  const [duplicateEmail, setduplicateEmail] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);

  const navigate = useNavigate();

  const handleRegisterClick = async () => {
    if(!value.usernameIsValid || !value.emailIsValid || !value.passwordIsValid || value.password !== value.passwordConfirm)
      return
    
    try {
      const duplicateEmailResponse = await checkDuplicateEmail({email: value.email});
      if(duplicateEmailResponse.data.success) {
        await register ({
          email: value.email,
          username: value.username,
          password: value.password
        });
        navigate('/main');
      } else {
        setduplicateEmail(true);
      }
    } catch (error) {
      setRegisterFailed(error.response.data.error.message);
      console.log(error.response.data.error.message);
    }
  }
  
  const everythingIsValid = value.usernameIsValid && value.emailIsValid && value.passwordIsValid && value.passwordConfirm === value.password;

  return (
    <div className='relative rounded-md flex flex-col items-center justify-center p-5'>
      <form>
        <div>
          <span>이메일(아이디)</span>
          <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.email && (value.emailIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="email" type="email" placeholder="이메일" autocomplete="email" value={value.email} onChange={handleOnChange}/>
          {!value.email && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.email && (
            value.emailIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">이메일이 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">이메일이 유효하지 않습니다</span>
            )
          )}
          {value.email && value.emailIsValid &&
            duplicateEmail && (
              <span className="text-red-500 text-xs block h-3 mb-1">중복된 이메일입니다.</span>
            )
          }
        </div>

        <div>
          <span>이름</span>
          <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.username && (value.usernameIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="username" type="text" placeholder="이름" autocomplete="username" value={value.username} onChange={handleOnChange}/>
          {!value.username && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.username && (
            value.usernameIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">이름이 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">이름이 유효하지 않습니다</span>
            )
          )}
        </div>

        <div>
          <span>비밀번호</span>
          <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.password && (value.passwordIsValid ? '': 'border-red-500')} border rounded-lg mt-2 mb-1`} id="password" type="password" placeholder="비밀번호" autocomplete="new-password" value={value.password} onChange={handleOnChange}/>
          {!value.password && <span className="text-black-500 text-xs block h-3 mb-1"></span>}
          {value.password && (
            value.passwordIsValid ? (
              <span className="text-green-500 text-xs block h-3 mb-1">비밀번호가 유효합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">비밀번호가 유효하지 않습니다</span>
            )
          )}
        </div>

        <div>
          <span>비밀번호 확인</span>
          <InputGroup inputClassName={`w-96 p-2 h-8 border-solid border-gray-300 ${value.passwordConfirm === value.password ? '': 'border-red-500'} border rounded-lg mt-2 mb-1`} id="passwordConfirm" type="password" placeholder="비밀번호 확인" autocomplete="new-password" label="비밀번호 확인" value={value.passwordConfirm} onChange={handleOnChange}/>
          {!value.passwordConfirm && <span className="text-black-500 text-xs block h-3 mb-1"> </span>}
          {value.passwordConfirm && (value.password === value.passwordConfirm
            ? (
              <span className="text-green-500 text-xs block h-3 mb-1">비밀번호가 동일합니다</span>
            ) : (
              <span className="text-red-500 text-xs block h-3 mb-1">비밀번호가 동일하지 않습니다</span>
            )
          )}
        </div>
      </form>
      <span className="h-2 text-red-500 text-xs">{registerFailed}</span>
      {everythingIsValid ? 
      <button
        className="w-96 m-2 pr-6 pl-6 p-2 bg-yellow-300 hover:bg-yellow-400 rounded-md mb-10"
        onClick={handleRegisterClick}>
          회원가입
      </button> :
        
      <button
        className="w-96 m-2 pr-6 pl-6 p-2 bg-yellow-300 text-gray-400 cursor-default rounded-md mb-10"
        >
          회원가입
      </button>}
    <div className="absolute left-4 bottom-0 m-3">
      <Link to='/login'><span className="text-sm">로그인</span></Link>
      </div>
    </div>
  );
}

export default RegisterForm;