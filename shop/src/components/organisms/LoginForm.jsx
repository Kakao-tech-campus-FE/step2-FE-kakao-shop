import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { login } from "../../services/api"
import Title from "../atoms/Title"
import { useDispatch,useSelector } from "react-redux"
import { setEmail } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react"


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
        if (err.response && err.response.data && err.response.data.error){
          setError(err.response.data.error); // API에서 받아온 오류 메시지 설정
        } else {
          setError("로그인에 실패했습니다."); // 기본 오류 메시지 설정
        }
      })
  }

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup 
        id="email" 
        type="email" 
        name="email"
        placeholder="이메일을 입력해주세요" 
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
        onBlur={validateEmail}
      />
      {emailErr && <div>{emailErr}</div>}
      <InputGroup 
        id="password" 
        type="password" 
        name="password"
        placeholder="******" 
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        onBlur={validPassword}
      />
      {pwErr && <div>{pwErr}</div>}

        <div>{error}</div>

      <Button
        className="mt-20 "
        disabled={isError}
        onClick={()=>{
          //api 요청 
          loginReq()
        }}
      >로그인 </Button>
    </Container>
  )
}

export default LoginForm