import { useState } from "react"

// 사용할 때 인자로 초기값을 꼭 넘겨줘야함  
const useInput = (initalValue) => {
  // 호출되면 initialValue의 상태를 관리하는 별도의 useState를 하나 만듬 
  const [value, setValue] = useState(initalValue)
  
  // 이메일 에러 메세지를 띄워줄 상태를 등록 
  const [emailErr, setEmailErr] = useState("")   
  const [pwErr, setPwErr] = useState("")

  //onChange 메서드에 대해 일관적인 훅을 만들고 싶음.
  //onChange 이벤트가 발생하면 name에 맞는 value를 업데이트 시켜준다. 
  //handleOnChange 결과를 return 으로 넘겨준다.
  const handleOnChange = (e) =>{
    const {name, value} = e.target
    setValue((prev)=>({...prev, [name]:value }))
  }

  const validateEmail = () =>{
    if (!value.email){
      setEmailErr("이메일 입력은 필수사항 입니다!")
    } 
    else if (!value.email.includes("@")) {
      setEmailErr("이메일 형식이 유효하지 않습니다.");
    }
    else{
      setEmailErr("");
    }
  }

    const validPassword = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};:,.<>?])[a-zA-Z\d!@#$%^&*()\-=_+{};:,.<>?]+$/;

    
    if (!value.password){
      setPwErr("비밀번호 입력은 필수사항 입니다!")
    } 
    else if (!passwordRegex.test(value.password)) {
      setPwErr(
      "비밀번호는 8-20자 이내의 영문, 숫자, 특수문자(@$!%*#?&)를 포함해야 합니다."
      );
    } 
    else {
      setPwErr("");
    }
  }

  return {value, emailErr, pwErr, handleOnChange, validateEmail, validPassword}
}

export default useInput;