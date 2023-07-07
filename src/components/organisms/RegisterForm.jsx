import React, { useEffect, useState } from 'react'
import RegiContainer from "../atoms/FormContainer"
import Button from "../atoms/Button"
import InputGroup from "../molecules/InputGroup"
import {postCheck, postJoin} from "../../api/register"
import { useNavigate } from 'react-router-dom';
import checkValid from '../../utils/checkForm'

//id, className, value, type, placeholder, onChange, label
const RegisterForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  })

  const [validMail, setValidMail] = useState(false);
  const [duple, setDuple] = useState(false);
  const [valid, setVaild] = useState(false)

  const inputChange = ( event, key ) => {
    setUser(prevObj => {
      return {...prevObj, [key]: event.target.value};
    })
  }

  const navigate = useNavigate();
  
  useEffect(() => {
    if (!validMail 
      || checkValid(user.password, 'password')
      || user.passwordCheck !== user.password) {
      setVaild(prev => false)
    } else {
      setVaild(prev => true)
    }
  }, [user, validMail])


  useEffect(() => {
    if (checkValid(user.email, 'email')) {
      postCheck(user)
      .then((response) => {
        setValidMail(prev => true)
        setDuple(prev => false)
      })
      .catch((error) => {
        setValidMail(prev => false)
        setDuple(prev => true)
      });
    }
    else{
      setValidMail(prev => false)
    }
  }, [user.email])

  const click = () => {
    if (valid){
    postJoin(user)
      .then((response) => {
        console.log(response)
        navigate("./")
      })
      .catch((error) => {
        console.log(error)
      }) }
  }


  return (
    <RegiContainer>
      <InputGroup 
        id="username" 
        type="text" 
        label="아이디" 
        onChange={event => inputChange(event, 'username')}
        style={ {borderTop:"none"} } 
        />
      
      
      <InputGroup 
        id="email" 
        type="email" 
        label="이메일"
        onChange={event => inputChange(event, 'email')} 
        message={
          (!user.email) 
            ? null 
            : (checkValid(user.email, 'email') 
              ? (duple 
                ? "이미 사용중인 메일입니다 "
                : null)
              : "형식이 올바르지 않습니다.")
          }
        />
      
      <InputGroup 
        id="password" 
        type="password" 
        label="비밀번호" 
        onChange={event => inputChange(event, 'password')} 
        message={( user.password && !checkValid(user.password, 'password') )
        ? "영문, 숫자, 특수문자 포함 8~20자" 
        : null }
        />
      

      <InputGroup 
        id="passwordCheck" 
        type="password" 
        label="비밀번호 확인"
        onChange={event => inputChange(event, 'passwordCheck')}
        message={user.passwordCheck && user.passwordCheck !== user.password 
          ? "비밀번호가 일치하지 않습니다" : null } />
      
      { valid ? 
          <Button 
            active={valid} 
            onClick={click}>
            가입하기
          </Button>

        : <Button
            active={valid} >가입하기</Button>
      }
      
    </RegiContainer>
  )
}

/* abcdef abcdef@naver.com aaaa1111!*/


export default RegisterForm