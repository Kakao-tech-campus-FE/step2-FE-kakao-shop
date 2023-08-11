import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { loginRequest } from '../../store/slices/userSlice';

const staticServerUri = process.env.REACT_APP_PATH||"";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  const email = useSelector((state) => state.user.email);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const {value, handleOnChange} = useInput({
    email: "",
    password: "",
  });   
  
  useEffect(() => {
    if (isLoggedIn === 'true') {
      // 로그인 상태일 때 자동으로 이동
      navigate(staticServerUri + '/');
    }
  }, [isLoggedIn, navigate]);
  
  const loginReq = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    )
      .then((res) => {
        navigate(staticServerUri + "/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  
  const goRegister = () => {
    navigate(staticServerUri + '/signup');
  }
  const validateValue = (value, validationRegex, errorMessage) => {
    if (!validationRegex.test(value)) {
      return errorMessage;
    }
    return null;
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    const errorMessage =
      "유효한 이메일을 입력해주세요. (예: example@example.com)";
    const emailError = validateValue(value.email, emailRegex, errorMessage);
    setEmailError(emailError);
  };

  const handlePasswordBlur = () => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;
    const errorMessage =
      "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백 없이 8~20자여야 합니다.";
    const passwordError = validateValue(
      value.password,
      passwordRegex,
      errorMessage
    );
    setPwError(passwordError);
  };


  return (
    <div className=" mt-32">
      <h1 className="text-center text-4xl text-black font-medium pb-10">kakao</h1>
      <div className='border max-w-[500px] mx-auto py-10 px-10'>
        <InputGroup
          id="email" 
          type="email"
          name="email" 
          placeholder="이메일(아이디)를 입력해주세요."
          label="이메일"
          value={value.email}
          onChange={handleOnChange}
          onBlur={handleEmailBlur}
          errorMsg={emailError}
        />
        <InputGroup 
          id="password" 
          type="password" 
          name="password"
          placeholder="**********"
          label="비밀번호"
          value={value.password}
          onChange={handleOnChange}
          onBlur={handlePasswordBlur}
          errorMsg={pwError}
        />
        <button
            className=" w-full bg-yellow-400 text-black py-3 mb-4 rounded"
            onClick={loginReq}
        >로그인</button>
        <p>
          <a className=" text-black text-sm" href='#' onClick={goRegister}>
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;