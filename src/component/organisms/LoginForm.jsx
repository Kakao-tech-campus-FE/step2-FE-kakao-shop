import Container  from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { login } from "../../services/user";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Box from "../atoms/Box";
import { useNavigate } from "react-router-dom";
import { loginRequest, setEmail } from "../../store/slices/userSlice";
// import { setUser } from "../../store/slices/userSlice";

const LoginForm =() =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email=useSelector((state)=> state.user.email);
    const [error, setError] = useState("");
    const{value, handleOnChange,validateEmail,
        validatePassword,}= useInput({
        email:"",
        password:"",
    });

    const loginRequest = ()=> {
      
        login({
            email: value.email,
            password: value.password,
        })
        .then((res)=>{
            console.log(res);
            const token = res.headers.authorization;
            localStorage.setItem("token", token);
            dispatch(
                setEmail({
                  email: value.email,
                })
              );
              navigate("/");
        })
        .catch((error)=> {
            console.log("error", error);
            setError("아이디와 비밀번호를 다시 확인해주세요.")
        });
    };

    return (
    <Container className="flex justify-center items-center">
        <div className="flex justify-center items-center">로그인</div>
        <span>{email}</span>
    
        <InputGroup name="email" id="email" type="email" placeholder="이메일을 입력해주세요"
        value={value.email}
        onChange={handleOnChange}
        />
        <InputGroup name="password" id="password" type="password" placeholder="*******"
        value={value.password}
        onChange={handleOnChange}
        />
        <Box>
        <span className="error">{error}</span>
        <Button className=" py-2 px-4 font-semibold rounded-lg shadow-md bg-yellow-300 hover:bg-yellow-400 "
            onClick={()=>{
                //로그인 요청
                const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
                    if (!emailRegex.test(value.email)) {
                      setError("이메일 형식을 다시 확인해주세요.");
                     return;
                      }
          if (!passwordRegex.test(value.password)) {
            setError("비밀번호는 영문, 숫자, 특수문자를 모두 포함해야하며 8자에서 20자 사이여야 합니다.");
            return;
          }
      
          setError(""); // 에러가 없을 경우에는 빈 메시지
                    loginRequest();
            }}
            >
                로그인
        </Button>
        <Button
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </Button>
        </Box>
    
    </Container>
    );
};
export default LoginForm;