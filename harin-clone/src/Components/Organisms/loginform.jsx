import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { useInput } from "react"


const LoginForm = ( ) => {
  const inputStyle = "text-justify items-cneter m-2 p-2 border-solid border-2 rounded-lg"

  // const { value, handleValue } = useInput({
  //   username:"",
  //   email:"",
  //   password:"",
  //   passwordConfirm:""
  // })

  return (
    <Container className="items-center mx-auto border-solid border-2 ">
      <div className="object-center	text-xl p-3 m-3 font-semibold text-center">Sign in</div>
      <InputGroup 
        id="email" 
        type="email" 
        placeholder="아이디(이메일)" 
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
      <Button className="align-middle items-center text-justify rounded-lg m-2 p-2 bg-amber-200">회원가입</Button>
    </Container>
  )
}

export default LoginForm;