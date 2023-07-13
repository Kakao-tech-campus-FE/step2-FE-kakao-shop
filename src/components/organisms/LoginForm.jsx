import Containor from '../atoms/Containor'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import Warning from '../atoms/Warning'
import useInput from '../../hooks/useInput'
import { login } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { setEmail } from '../../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import Label from '../atoms/Label'


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
    console.log(form.username)
  },[form])

  return (
    <Containor style={{margin: '100px auto', width: '1500px'}}>
      <Containor style={{margin: '0 auto'}}>
      <span>{email}</span>
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
      <InputGroup id="password" type="password" placeholder="비밀번호" label="비밀번호" name= "password" value={form.password} onChange={handleOnChange}
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
        display: 'block', width: '50%', margin: '0 auto', marginBottom: '10px', fontWeight: 'bold'
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
      
      onClick={()=>{
        //유효성 검사
        const regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/

        if(!regEmail.test(form.email)){
          setValid(false)
          setErrorMsg("이메일 형식이 틀렸습니다.")
          return
        }

        if(form.password===""){
          console.log(form.password)
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
            dispatch(
              setEmail({
              email: form.email
            })
            )
            localStorage.setItem("token",res.headers.authorization)
            navigate("/")
        }).catch((error)=>{
          setValid(false)
          setErrorMsg(error.response.data.error.message)
        })
      }}>
      로그인</Button>
    </Containor>
    </Containor>
  )
}

export default LoginForm