import React, { useEffect, useState } from 'react'
import RegiContainer from "../atoms/Container"
import Button from "../atoms/Button"
import InputGroup from "../molecules/InputGroup"
import EmailCheck from "../atoms/EmailCheck"
import postCheck from "../../api/register"

//id, className, value, type, placeholder, onChange, label
const RegisterForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  })

  const [click, setClick] = useState(false)

  const inputChange = ( event, key ) => {
    setUser(prevObj => {
      return {...prevObj, [key]: event.target.value};
    })
  }

  useEffect(() => {
    if (user.email) {
      console.log(user)
      postCheck(user)

    }
  }, [click])

  return (
    <RegiContainer>
      <InputGroup 
        id="username" 
        type="text" 
        label="아이디" 
        onChange={event => inputChange(event, 'username')}
        style={ {borderTop:"none"}  } />
      {user.username ? <p>{user.username}</p> : null }
      
      <InputGroup 
        id="email" 
        type="email" 
        label="이메일"
        onChange={event => inputChange(event, 'email')} />
      {user.email ? <p>{user.email}</p> : null }

      <InputGroup 
        id="password" 
        type="password" 
        label="비밀번호" 
        onChange={event => inputChange(event, 'password')} />
      {user.password && user.password.length < 6 
        ? <p>6자 이상으로 설정하세요</p> : null }

      <InputGroup 
        id="passwordCheck" 
        type="password" 
        label="비밀번호 확인"
        onChange={event => inputChange(event, 'passwordCheck')} />
      {user.passwordCheck && user.passwordCheck !== user.password 
        ? <p>비밀번호가 일치하지 않습니다</p> : null }

      <Button id="submit">가입하기</Button>
      <EmailCheck onClick={prev => setClick(true)}>이메일체크</EmailCheck>
    </RegiContainer>
  )
}

export default RegisterForm