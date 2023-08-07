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
    const{value, handleOnChange}= useInput({
        email:"",
        password:""
    });

	const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"
	
    // const handleOnClick = () => {     
    //     dispatch(
    //       loginRequest({
    //         email: value.email,
    //         password: value.password,
    //       })
    //     );
      
    // };

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
              navigate(staticServerUrl + "/")
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
            onClick={
              loginRequest
            }
            >
                로그인
        </Button>
        <Button
          onClick={() => {
            navigate(staticServerUrl + "/signup");
          }}
        >
          회원가입
        </Button>
        </Box>
    
    </Container>
    );
};
export default LoginForm;