import Container from '../atoms/Container'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import useInput from '../../hooks/useInput'
import { register } from '../../services/user'

import { useNavigate } from 'react-router-dom'
// import { BrowserRouter as Redirect } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate()
  const {
    value,
    handleOnChange,
    emailError,
    passwordError,
    handlePwChange,
    handleEmailChange,
    isAllOk,
  } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  return (
    <Container>
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디) 입력해주세요"
        label="이메일"
        value={value.email}
        onChange={handleEmailChange}
        message={emailError}
      />

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        label="비밀번호"
        value={value.password}
        onChange={handlePwChange}
        message={passwordError}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="**********"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          })
            .then(res => {
              alert('성공')
              navigate('/')
            })
            .catch(error => {
              alert(error.response.data.error.message)
            })
        }}
        disabled={!isAllOk}
      >
        회원가입
      </Button>
    </Container>
  )
}

export default RegisterForm
