import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postCheck, postJoin } from "api/register"
import { emailValidate, passwordValidate } from 'utils/validator'

import { FormContainer } from 'components/atoms/form'
import InputGroup from "components/molecules/InputGroup"
import SubmitButton from 'components/atoms/SubmitButton';
import useForm from 'hooks/useForm';

const url = process.env.REACT_APP_PATH || "";

const RegisterForm = () => {

  /** 현재 입력 상태 */
  const [user, setUser] = useForm({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  })


  /** 이메일 중복 여부 상태 */
  const [duple, setDuple] = useState(false);

  /** 이메일 형식이 맞으면 email 칸에 값 입력할때마다 중복 체크 요청 보냄 */
  useEffect(() => {
    if (emailValidate(user.email)) {
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

  /**
   * 가입 성공시 메인으로 이동, 알림 띄우기
   */
  const click = () => {
    postJoin(user)
      .then((response) => {
        navigate(url + "/")
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
        onChange={setUser}
        />
      
      <InputGroup 
        id="email" 
        type="email" 
        label="이메일"
        onChange={setUser} 
        message={
          user.email && 
            ( emailValidate(user.email) 
                ? (duple && "이미 사용중인 메일입니다.")
                : "형식이 올바르지 않습니다."
            )
          }
        />
      
      <InputGroup 
        id="password" 
        type="password" 
        label="비밀번호" 
        onChange={setUser} 
        message={user.password && !passwordValidate(user.password) &&
          "영문, 숫자, 특수문자 포함 8~20자"}
        />
      

      <InputGroup 
        id="passwordCheck" 
        type="password" 
        label="비밀번호 확인"
        onChange={setUser}
        message={user.passwordCheck && user.passwordCheck !== user.password 
          && "비밀번호가 일치하지 않습니다"} 
        />

      <SubmitButton
        disabled={ !passwordValidate(user.password) || duple 
          || user.passwordCheck !== user.password } 
        onClick={click}
      >
        가입하기
      </SubmitButton>

    </FormContainer>
  )
}

export default RegisterForm