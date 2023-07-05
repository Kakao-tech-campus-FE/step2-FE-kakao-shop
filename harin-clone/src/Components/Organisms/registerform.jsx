import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { useInput } from "react"


const RegisterForm = ( ) => {
  const inputStyle = "text-justify items-cneter m-2 p-2 border-solid border-2 rounded-lg"

  // const { value, handleValue } = useInput({
  //   username:"",
  //   email:"",
  //   password:"",
  //   passwordConfirm:""
  // })

  return (
    <Container className= "items-center mx-auto border-solid border-2">
      <div className="text-xl p-3 m-3 font-semibold text-center">Sign up</div>
      <InputGroup 
        id="username" 
        type="text" 
        placeholder="이름" 
        // label="이름" 
        // value={value.username}
        // onChange={handleValue}
        className={inputStyle} 
      />
      <InputGroup 
        id="email" 
        type="email" 
        placeholder="이메일" 
        // label="이메일" 
        // value={value.email}
        // onChange={handleValue}
        className={inputStyle} 
      />
      <InputGroup 
        id="password" 
        type="password" 
        placeholder="비밀번호" 
        // label="비밀번호" 
        // value={value.password}
        // onChange={handleValue}
        className={inputStyle} 
      />
      <InputGroup 
        id="passwordConfirm" 
        type="password" 
        placeholder="비밀번호 재확인" 
        // label="비밀번호 확인" 
        // value={value.passwordConfirm}
        // onChange={handleValue}
        className={inputStyle} 
      />    
      <Button className="items-center text-justify rounded-lg m-3 p-3 bg-amber-200">로그인</Button>
    </Container>
  )
}

export default RegisterForm;