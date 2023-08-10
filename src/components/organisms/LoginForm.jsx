import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { login } from "../../services/user"
import { useDispatch,useSelector } from "react-redux"
import { setEmail } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Footer from "../atoms/Footer"
const staticServerUrl = process.env.REACT_APP_PATH || "";

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const email = useSelector((state) => state.user.email)
  const {
    value, 
    emailErr, 
    pwErr, 
    handleOnChange, 
    validateEmail, 
    validPassword
  } = useInput({
    email:"",
    password:"",
  }) 
  
  const [error, setError] = useState(""); // api서버에서 넘어온 오류 메시지 상태

  const isError = emailErr || pwErr
  
  const loginReq = () =>{
    login({
      email: value.email, 
      password: value.password
    })
      .then((res)=>{ //정상 
        console.log(res)
        dispatch(
          setEmail({
            email: value.email
          })
        )
        // 로그인 성공 후 메인 페이지로 리다이렉트
        navigate("/")
      })
      .catch((err)=>{ // 에러 
        console.log("err",err)
        // 로그인 실패 시 에러 처리
        if (err.data && err.data.error && err.data.error.message){
          setError(`[Error 발생] ${err.data.error.message} :(`); // API에서 받아온 오류 메시지 설정
        } else {
          setError("로그인에 실패했습니다."); // 기본 오류 메시지 설정
        }
      })
  }

  return (
    <div class="flex flex-col h-screen">
    <Container className="inner flex flex-col gap-7 justify-center items-center h-screen">
      <img src={staticServerUrl +'/logoKakaoText.png'} alt='로그인' />
      <div className="py-10 px-20 border">
        <span>{email}</span>
        <InputGroup 
          id="email" 
          type="email" 
          name="email"
          placeholder="이메일" 
          value={value.email}
          onChange={handleOnChange}
          onBlur={validateEmail}
        />
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
        {error && <div className="bg-gray-300/75 p-5 rounded my-5 text-lg text-red-400"> {error} </div> }
        <Button
          className={`btn-order block w-full p-4 mt-10 text-lg ${isError?'cursor-not-allowed bg-gray-300 hover:bg-gray-300':'cursor-pointer'}`}
          disabled={isError}
          onClick={()=>{
            //api 요청 
            loginReq()
          }}>
          로그인
        </Button>
        <Button
            className="block w-full p-4 mt-10 text-lg"
            onClick={()=>{navigate('/signup')}}
          >
            회원가입
          </Button>
      </div>
    </Container>
    <Footer/>
    </div>
  )
}

export default LoginForm