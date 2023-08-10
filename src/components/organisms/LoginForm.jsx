import Containor from '../atoms/Containor'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import Warning from '../atoms/Warning'
import useInput from '../../hooks/useInput'
import { login } from '../../services/user'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { setEmail } from '../../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const staticServerUri = process.env.REACT_APP_PATH || "";

function LoginForm() {
  const dispatch = useDispatch()
  const email = useSelector((state)=>
    state.user.email
  )

  const { form, handleOnChange } = useInput({
    email: "",
    password: "",
  }) 


  const [ valid, setValid ] = useState(true)
  const [ errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    // console.log(form.username)
  },[form])

  return (
    <Containor style={{
      display: 'inline-block', 
      width: '100%', 
      height: '100%',
      verticalAlign:'middle'}}>
      <Containor style={{
        position: 'absolute',
        width: '100%', 
        height: '100%',
      }}>
      <Containor style={{
        marginTop: '50px',
      }}>
        <Title style={{
          display:'block', 
          margin: '0 auto',
          width:'88px', 
          height: '27px', 
          fontSize: '27px'
        }}>KaKao</Title>
      </Containor>
       <Containor style={{width: '100%'}}>
        <Containor style={{
        margin: '50px auto', 
        width:'580px',
        height: '100%',
        border: '1px solid rgba(0,0,0,.12)',
        borderRadius: '15px',
        padding: '40px 69px',
        fontSize: '12px',
        boxSizing: 'border-box',
        }}>
      <span>{email}</span>
      <InputGroup id="email" type="email" placeholder="이메일(아이디)를 입력해주세요!" name= "email" label="이메일(아이디)" value={form.email} onChange={handleOnChange}
      style={{
        width: '100%',
        display: 'block',
        borderRadius: '5px',
        border: '1px solid gray',
        marginBottom: '15px',
      }}
      labelStyle={{
        display: 'block', 
        marginBottom: '5px',
      }}
      />
      <InputGroup id="password" type="password" placeholder="비밀번호" label="비밀번호" name= "password" value={form.password} onChange={handleOnChange}
      style={{
        width: '100%',
        display: 'block',
        borderRadius: '5px',
        border: '1px solid gray',
        marginBottom: '20px',
      }}
      labelStyle={{
        display: 'block', 
        marginBottom: '5px',
      }}
      />
      <Warning style={{
        margin: '0 auto',
        marginBottom: '1px',
        width: '50%',
        height: '1rem',
        textAlign: 'center',
      }}>{valid ? " " : errorMsg}</Warning>
      <Button style={{
        width: '100%',
        display: 'block',
        borderRadius: '5px',
        border: '1px solid gray',
        backgroundColor: '#ffe342'
      }} 
      
      onClick={()=>{
        //유효성 검사
        const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/

        if(!regEmail.test(form.email)){
          setValid(false)
          setErrorMsg("이메일 형식이 틀렸습니다.")
          return
        }

        if(form.password===""){
          setValid(false)
          setErrorMsg("비밀번호를 정확하게 입력해주세요.")
          return
        }

        setValid(true)
        setErrorMsg("")

          //api 로그인 요청
          login({
            email: form.email,
            password: form.password,
          }).then((res)=>{
            localStorage.setItem("token",res.headers.authorization)
              dispatch(
                setEmail({
                email: form.email
              })
              )
              navigate(staticServerUri + "/")
          }).catch((error)=>{
            setValid(false)
            setErrorMsg(error.data.error.message)
          })
        }}>
        로그인</Button>
         </Containor>
       </Containor>
      </Containor>
    </Containor>
  )
}

export default LoginForm