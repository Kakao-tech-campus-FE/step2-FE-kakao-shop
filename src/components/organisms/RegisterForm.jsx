import React, { useEffect, useState } from 'react'
import FormContainer from "../atoms/form/FormContainer"
import SubmitGroup from "../molecules/form/SubmitGroup"
import InputGroup from "../molecules/form/InputGroup"
import {postCheck, postJoin} from "../../api/register"
import { useNavigate } from 'react-router-dom';
import checkValid from '../../utils/checkForm'

const RegisterForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  })

  const inputChange = ( event, key ) => {
    setUser(prevObj => {
      return {...prevObj, [key]: event.target.value};
    })
  }

  // 이메일 중복 여부
  const [duple, setDuple] = useState(false);

  // 이메일 형식이 맞으면 email 칸에 값 입력할때마다 중복 체크 요청 보냄
  useEffect(() => {
    if (checkValid(user.email, 'email')) {
      postCheck(user)
      .then((response) => {
        setDuple(prev => false)
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setDuple(prev => true)
        }
      })
    }
  }, [user.email])

  const navigate = useNavigate();

  // 가입 성공시 메인으로 이동, 알림 띄우기
  const click = () => {
    postJoin(user)
      .then((response) => {
        navigate("/")
      })
      .then(() => {
        alert("가입완료")
      })
      .catch((error) => {
        alert("가입실패 : 네트워크오류")
        console.log(error)
      }) 
  }


  return (
    <FormContainer>

      <InputGroup 
        id="username" 
        type="text" 
        label="아이디" 
        onChange={event => inputChange(event, 'username')}
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
          ? "비밀번호가 일치하지 않습니다" : null } 
        />

      {/* Props
          onChange : 상태 객체 user에서 passwordCheck 값을 입력값으로
          message : 형식 안맞을 경우 입력칸 아래에 출력할 메세지
      */}

      <SubmitGroup
        active={
            !duple
            && checkValid(user.password, 'password')
            && user.passwordCheck === user.password
            } 
        onClick={click}
        >
        가입하기
      </SubmitGroup>       
      
      {/* Props
          active : 버튼 활성화 여부 (양식이 맞을 때 활성화, 활성화되면 색이 바뀜)
          onClick : 제출시 동작
      */}

    </FormContainer>
  )
}

/* abcdef abcdef@naver.com aaaa1111!*/


export default RegisterForm