import Containor from '../atoms/Containor'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import Title from '../atoms/Title'
import useInput from '../../hooks/useInput'
import { login } from '../../services/api'
import { useEffect } from 'react'


function LoginForm() {
  const { form, handleOnChange } = useInput({
    email: "",
    password: "",
  }) 

  useEffect(()=>{
    console.log(form.username)
  },[form])

  return (
    <Containor>
      <Title>로그인</Title>
      <InputGroup id="email" type="email" placeholder="이메일(아이디)를 입력해주세요!" name= "email" label="이메일(아이디)" value={form.email} onChange={handleOnChange}/>
      <InputGroup id="password" type="password" placeholder="*****" label="비밀번호" name= "password" value={form.password} onChange={handleOnChange}/>
      <Button onClick={()=>{
        //api 로그인 요청
        login({
          email: form.email,
          password: form.password,
        })    
      }}>
      로그인</Button>
    </Containor>
  )
}

export default LoginForm