import Containor from '../atoms/Containor'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import Warning from '../atoms/Warning'
import useInput from '../../hooks/useInput'
import { register, emailCheck } from '../../services/user'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";


function RegisterForm() {
  const { form, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  }) 

  function onClickHandlerEmailCheck() {
    emailCheck(form.email)
    .then((res)=>{
      if(res.status===200 && res.data.success === true){
        setEmailValid(true)
      }
    })
    .catch((error)=>{
      const token = localStorage.getItem("token")
      alert(error.data.error.message)
    })
  }

  function onClickHandlerRegister() {
   //유효성 검사
   const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
   const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;

   if(!emailValid){
     setValid(false)
     setErrorMsg("이메일 중복 체크버튼을 눌러주세요")
     return;
   }


   if(form.username===""){
     setValid(false)
     setErrorMsg("유저이름을 입력해주세요")
     return;
   }

   if(!regEmail.test(form.email)){
     setValid(false)
     setErrorMsg("이메일 형식이 틀렸습니다.")
     return
   }

   if(!regPassword.test(form.password)){
     console.log(form.password)
     setValid(false)
     setErrorMsg("비밀번호를 입력해 주세요.(영문자/숫자/특수문자 포함 8~20자).")
     return
   }
   
   if(form.password !== form.passwordConfirm){
     setValid(false)
     setErrorMsg("비밀번호와 비밀번호 확인 값이 다릅니다.")
     return;
   }

   setValid(true)
   setErrorMsg("")

   register({
     //api 회원가입 요청
     email: form.email,
     password: form.password,
     username: form.username,
   }).then((res)=>{
       navigate(staticServerUri + "/")
   }).catch(error=>{setValid(false)
     setErrorMsg(error.data.error.message)})


  }

  const [ valid, setValid ] = useState(true)
  const [ errorMsg, setErrorMsg] = useState("")
  const [ emailValid, setEmailValid ] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{setEmailValid(false)},[form.email])

  return (
    <Containor style={{margin: '100px auto'}}>
      <InputGroup id="email" type="email" placeholder="이메일(아이디)를 입력해주세요!" name= "email" label="이메일(아이디)" value={form.email} onChange={handleOnChange}
      style={{
        display: 'block',
        width: '50%',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid gray',
        margin: '0 auto',
        marginBottom: '15px' 
      }}
      labelStyle={{
        display: 'block',width: '50%', margin: '0 auto', marginBottom: '10px', fontWeight: 'bold'
      }}
      />
      <Button disable = {emailValid} 
      style={{
        display: 'block',
        width: '50%',
        margin: '0 auto',
        marginBottom: '35px',
        height: '30px',
        fontWeight: 'bold',
        borderRadius: '5px',
        border: '1px solid gray',
        backgroundColor: '#ffe342',
      }} 
      
      onClick={onClickHandlerEmailCheck}>이메일 중복 확인</Button>

      <InputGroup id="username" type="text" placeholder="사용자 이름를 입력해주세요!" label="이름" name= "username" onChange={handleOnChange}
       style={{
        display: 'block',
        width: '50%',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid gray',
        margin: '0 auto',
        marginBottom: '15px' 
      }}
      labelStyle={{
        display: 'block',width: '50%', margin: '0 auto', marginBottom: '10px', fontWeight: 'bold'
      }}
      />
      <InputGroup id="password" type="password" placeholder="*****" label="비밀번호" name= "password" value={form.password} onChange={handleOnChange}
      style={{
        display: 'block',
        width: '50%',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid gray',
        margin: '0 auto',
        marginBottom: '15px' 
      }}
      labelStyle={{
        display: 'block',width: '50%', margin: '0 auto', marginBottom: '10px', fontWeight: 'bold'
      }}
      />
      <InputGroup id="passwordConfirm" type="password" placeholder="*****" label="비밀번호 확인" name= "passwordConfirm" value={form.passwordConfirm} onChange={handleOnChange}
      style={{
        display: 'block',
        width: '50%',
        height: '30px',
        borderRadius: '5px',
        border: '1px solid gray',
        margin: '0 auto',
        marginBottom: '15px' 
      }}
      labelStyle={{
        display: 'block',width: '50%', margin: '0 auto', marginBottom: '10px', fontWeight: 'bold'
      }}
      />
      {valid ? "" : <Warning style={{
        margin: '0 auto',
        width: '50%',
      }}>{errorMsg}</Warning>}
      <Button style={{
        display: 'block',
        width: '50%',
        margin: '0 auto',
        marginTop: '50px',
        height: '50px',
        fontWeight: 'bold',
        borderRadius: '5px',
        border: '1px solid gray',
        backgroundColor: '#ffe342'
      }} 
      onClick={onClickHandlerRegister}>
      회원 가입</Button>
    </Containor>
  )
}

export default RegisterForm