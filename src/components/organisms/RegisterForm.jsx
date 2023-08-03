import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { check, register } from "../../services/user"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Footer from "../atoms/Footer"
const staticServerUrl = process.env.REACT_APP_PATH || "";
const RegisterForm = () => {
  const navigate = useNavigate()
  const {
    value, 
    emailErr, 
    pwErr, 
    handleOnChange, 
    validateEmail, 
    validPassword
  } = useInput({
    username:"",
    email:"",
    password:"",
    passwordConfirm:""
  }) 
  const [error, setError] = useState(""); // api서버에서 넘어온 오류 메시지 상태

  const isPasswordMatch = value.password === value.passwordConfirm 

  // 이메일 비밀번호 비밀번호 확인 중 하나라도 에러 메세지가 있으면 isError는 TRUE
  const isError = (emailErr || pwErr || !isPasswordMatch);

  const RegisReq = () =>{
    register({
      email: value.email, 
      password: value.password,
      username: value.username
    })
      .then((res)=>{ //정상 
        console.log(res)
        // 회원가입 성공 후 메인 페이지로 리다이렉트
        navigate("/")
      })
      .catch((err)=>{ // 에러 
        console.log(err)
        setError(`${err.response.data.error.message}`);
      })
  }

  const handleOnClick = (e) => {
    check({email:value.email})
      .then((res)=>{
        alert('사용 가능한 이메일입니다.')
        e.target.disabled=true
        setError('')
      })
      .catch((err)=>{
        setError(`${err.response.data.error.message}`); 
      })
  }

  return (
    <div class="flex flex-col h-screen">
    <Container className="inner flex-1 flex flex-col gap-7 justify-center items-center h-screen">
        <img src={staticServerUrl +'/logoKakaoText.png'} alt='회원가입'/>
        <div className="py-10 px-20 border">
          <InputGroup 
            id="username"
            type="text" 
            name="username"
            placeholder="이름" 
            value={value.username}
            onChange={handleOnChange}
          />
          <div className="flex justify-stretch gap-4">
          <InputGroup 
            id="email" 
            type="email" 
            name="email"
            placeholder="이메일" 
            value={value.email}
            onChange={handleOnChange}
            onBlur={validateEmail}
          />
          <Button
            className='btn-order px-4 h-[60px] mt-5'
            onClick={handleOnClick}
            >
              중복확인
          </Button>
          </div>
          {emailErr && <div className="mt-3 text-red-400">{emailErr}</div>}
          <InputGroup 
            id="password" 
            type="password" 
            name="password"
            placeholder="비밀번호" 
            value={value.password}
            onChange={handleOnChange}
            onBlur={validPassword}
          />
          {pwErr && <div className="mt-3 text-red-400">{pwErr}</div>}
          <InputGroup 
            id="passwordConfirm" 
            type="password" 
            name="passwordConfirm"
            placeholder="비밀번호 확인" 
            value={value.passwordConfirm}
            onChange={handleOnChange}
          />
          {!isPasswordMatch && (
            <div className="mt-3 text-red-400">비밀번호와 비밀번호 확인이 일치하지 않습니다.</div>
          )}
          {error && <div className="bg-gray-300/75 p-5 rounded my-5 text-lg text-red-400"> {error} </div> }
          <Button
            className={`btn-order block w-full p-4 mt-10 text-lg ${isError?'cursor-not-allowed bg-gray-300 hover:bg-gray-300':'cursor-pointer'}`}
            disabled={isError}
            onClick={()=>{
              RegisReq()
            }}>
            회원가입
          </Button>
          <Button
            className="block w-full p-4 mt-10 text-lg"
            onClick={()=>{navigate('/login')}}
          >
            로그인
          </Button>
        </div>
    </Container>
    <Footer/>
    </div>
  )
}

export default RegisterForm