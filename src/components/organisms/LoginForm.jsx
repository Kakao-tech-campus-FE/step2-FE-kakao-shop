import React from 'react'
import { FormContainer } from 'components/atoms/form'
import SubmitButton from 'components/atoms/SubmitButton'
import InputGroup from "components/molecules/InputGroup"

import { emailValidate, passwordValidate } from 'utils/validator'
import useForm from 'hooks/useForm'
import useLogin from 'hooks/useLogin'


const LoginForm = () => {

  const [user, setUser] = useForm({
    email: "",
    password: "",
  })
  const [submitHandler, wrongTry, failCnt] = useLogin(user)

  return (
    <FormContainer>

      <InputGroup 
        id="email" 
        type="email" 
        label="이메일"
        onChange={setUser} 
        message={
          ( user.email && !emailValidate(user.email) )
              ? "이메일 형식으로 입력해주세요"
              : null
          }
      />
      
      <InputGroup 
        id="password" 
        type="password" 
        label="비밀번호" 
        onChange={setUser} 
        message={
          ( user.password && !passwordValidate(user.password) )
          ? "영문, 숫자, 특수문자 포함 8~20자" 
          : null }
        /> 
        <SubmitButton 
          disabled={!emailValidate(user.email) || !passwordValidate(user.password)} 
          onClick={submitHandler}
        >
          로그인
        </SubmitButton>  

        {wrongTry && failCnt > 0 && 
          <div className='text-center'>{`실패 : 로그인 시도 ${failCnt}회`}</div>
        }
 

    </FormContainer>
  )
}

export default LoginForm