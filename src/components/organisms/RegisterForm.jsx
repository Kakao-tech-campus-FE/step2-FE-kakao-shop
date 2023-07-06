import Containor from '../atoms/Containor'
import InputGroup from '../molecules/InputGroup'
import Button from '../atoms/Button'
import useInput from '../../hooks/useInput'
import { register } from '../../services/api'


function RegisterForm() {
  const { form, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  }) 

  return (
    <Containor>
    <InputGroup id="username" type="text" placeholder="사용자 이름를 입력해주세요!" label="이름" name= "username" value={form.username} onChange={handleOnChange}/>
      <InputGroup id="email" type="email" placeholder="이메일(아이디)를 입력해주세요!" name= "email" label="이메일(아이디)" value={form.email} onChange={handleOnChange}/>
      <InputGroup id="password" type="password" placeholder="*****" label="비밀번호" name= "password" value={form.password} onChange={handleOnChange}/>
      <InputGroup id="passwordConfirm" type="password" placeholder="*****" label="비밀번호 확인" name= "passwordConfirm" value={form.passwordConfirm} onChange={handleOnChange}/>
      <Button onClick={()=>{
        register({
          email: form.email,
          password: form.password,
          username: form.username,
        })    
      }}>
      회원 가입</Button>
    </Containor>
  )
}

export default RegisterForm