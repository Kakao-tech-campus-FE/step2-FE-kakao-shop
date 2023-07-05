import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import useInput from "../../hooks/useInput"
import { login } from "../../services/api"
import Title from "../atoms/Title"
import { useDispatch,userSelector } from "react-redux"
import { setEmail } from "../../store/slices/userSlice"

const LoginForm = () => {
  const dispatch = useDispatch()
  const email = userSelector((state) => state.user.email)
  const {value, handleOnChange} = useInput({
    email:"",
    password:"",
  }) 
  
  const loginReq = () =>{
    login({
      emial: value.email, 
      password: value.password
    })
      .then((res)=>{ //정상 
        console.log(res)
        dispatch(
          setEmail({
            email: value.email
          })
        )
      })
      .catch((err)=>{ // 에러 
        console.log("err",err)
      })
  }

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup 
        id="email" 
        type="email" 
        name="email"
        placeholder="이메일을 입력해주세요" 
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup 
        id="password" 
        type="password" 
        name="password"
        placeholder="******" 
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={()=>{
          //api 요청 
          loginReq()
        }}
      >로그인 </Button>
    </Container>
  )
}

export default LoginForm