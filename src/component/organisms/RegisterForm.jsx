import Container  from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/user";
import { useState } from "react";
import Box from "../atoms/Box";
import { useNavigate } from "react-router-dom";

const RegisterForm =() =>{
    const{value, handleOnChange}= useInput({
        username:"",
        email:"",
        password:"",
        passwordConfirm:""
    });
    const [error, setError] = useState(""); // 에러 메시지 상태 추가
    const navigate=useNavigate();

  const registerReq = () => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;

    if (!emailRegex.test(value.email)) {
      setError("이메일 형식을 다시 확인해주세요.");
      return;
    }
    if (!passwordRegex.test(value.password)) {
      setError(
        "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야하며 8자에서 20자 사이여야 합니다."
      );
      return;
    }
    if (value.password !== value.passwordConfirm) {
      setError("비밀번호 확인이 올바르지 않습니다.");
      return;
    }

    setError(""); // 에러가 없을 경우에는 빈 메시지

    register({
      username: value.username,
      email: value.email,
      password: value.password
    })
      .then(res => {
        setError('');
            alert('회원가입 완료!\n 로그인이 필요합니다.');
            navigate("/login");
        // 회원가입 성공 처리
      })
      .catch(error => {
        console.log(error.request.response);
            const errObject = JSON.parse(error.request.response);
            setError(errObject.error.message)
        // 회원가입 실패 처리
      });
  };

    return (
    <Container>
        <InputGroup name="email" id="email" type="email" placeholder="이메일" label="이메일(아이디)"
        value={value.email}
        onChange={handleOnChange}
        />
        <InputGroup name="username" id="username" type="text" placeholder="이름" label="이름"
        value={value.username}
        onChange={handleOnChange}
        />
        <InputGroup name="password" id="password" type="password" placeholder="*******" label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        />
        <InputGroup name="passwordConfirm" id="passwordConfirm" type="password" placeholder="********" label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
        />
        <Box>
        <span 
        className="error"> {error}
        </span>
        
        <Button
            onClick={()=>{
                //회원가입 요청
                registerReq();
            }}
            >
            회원가입
        </Button>
        </Box>
    
    </Container>
    );
};
export default RegisterForm;