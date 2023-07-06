import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { register } from "../../api";
import useInput from "../../Hooks/useinput";
import Box from "../Atoms/box";

const RegisterForm = ( ) => {
  const inputStyle = "text-justify items-cneter m-3 p-3 border-solid border-2 rounded";

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Container className= "border-solid border-2">
        <div className="object-center	text-xl p-3 m-3 font-semibold text-center">Sign up</div>
        <InputGroup 
          id="username" 
          type="text" 
          name="username"
          placeholder="이름을 입력하세요" 
          label="이름" 
          value={value.username}
          onChange={handleOnChange}
          className={inputStyle} 
        />
        <InputGroup 
          id="email" 
          type="email" 
          name="email"
          placeholder="이메일을 입력하세요" 
          label="이메일" 
          value={value.email}
          onChange={handleOnChange}
          className={inputStyle} 
        />
        <InputGroup 
          id="password" 
          type="password" 
          name="password"
          placeholder="비밀번호를 입력하세요" 
          label="비밀번호" 
          value={value.password}
          onChange={handleOnChange}
          className={inputStyle} 
        />
        <InputGroup 
          id="passwordConfirm" 
          type="password" 
          name="passwordConfirm"
          placeholder="비밀번호를 다시 입력하세요" 
          label="비밀번호 확인" 
          value={value.passwordConfirm}
          onChange={handleOnChange}
          className={inputStyle} 
        />    
        <Box className="m-3">
          <Button 
            onClick={() => {
              register({
                username: value.username,
                email: value.email,
                password: value.password,
              })
            }}
            className="items-center text-center w-full h-12 mt-4 rounded bg-amber-300"
          >
          로그인
          </Button>
        </Box>  
      </Container>
    </div>
  );
};

export default RegisterForm;