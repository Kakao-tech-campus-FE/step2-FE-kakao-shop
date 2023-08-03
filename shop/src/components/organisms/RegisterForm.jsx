import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { register } from "../../services/user"
import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title"
import { useState } from "react"

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
        console.log("err",err)
        // 회원가입 실패 시 에러 처리
        if (err.data && err.data.error && err.data.error.message){
          setError(`[Error 발생] ${err.data.error.message} :(`); // API에서 받아온 오류 메시지 설정
        } else {
          setError("회원가입에 실패했습니다."); // 기본 오류 메시지 설정
        }
      })
  }


  return (
    <Container className="mx-96 mt-10 items-center justify-center">
      <div className="w-max p-52 bg-white shadow">
        <Title>회원가입</Title>
        <InputGroup 
          id="username"
          type="text" 
          name="username"
          placeholder="사용자의 이름을 입력해주세요" 
          label="이름"
          value={value.username}
          onChange={handleOnChange}
        />
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
        {emailErr && <div className="mb-5">{emailErr}</div>}
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
        {pwErr && <div className="mb-5">{pwErr}</div>}
        <InputGroup 
          id="passwordConfirm" 
          type="password" 
          name="passwordConfirm"
          placeholder="******" 
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
        />
        {!isPasswordMatch && (
          <div className="mb-5">비밀번호와 비밀번호 확인이 일치하지 않습니다.</div>
        )}
        
        <div className="mt-5 text-lg font-semibold text-red-400"> {error} </div>


        <Button
          className="mt-10 btn-primary py-2 px-4"
          disabled={isError || !value.password || !value.passwordConfirm }
          onClick={()=>{
            //api 요청 
            // register(value) 로 보내면 passwordConfirm 이라는 불필요한 값까지 섞여있음
            RegisReq()
          }}
        >회원가입</Button>
      </div>
    </Container>
  )
}

export default RegisterForm