import Container from "../atoms/Container";
// import Link from "../atoms/Link";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import useInput from "../../hooks/useInput";
import { setEmail } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { login } from "../../services/user";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();  //redux 의 액션을 발생시키는 함수!!

    const {
        value,
        handleOnChange,
        emailError,
        validateEmail,
        passwordError,
        validatePassword,
    } = useInput({
            email: "",
            password: "",
          });
    
    const [apiErr, setApiErr] = useState("");
    const isLoginError = (emailError || passwordError || value.email === "" || value.password === "") ? true: false ;
    // const loginState = localStorage.getItem("loginState"); // 로그인 상태를 컴포넌트 내부의 상태로 관리
    

    const loginReq = () => {
        login({   //userSlice의 builderAddcase 부분에서 state.email 쪽 코드로 대체 가능
            email: value.email, 
            password: value.password
        })
            .then((res) => { //로그인 성공
                console.log(res)
                dispatch(setEmail({
                    email: value.email, //객체 형태로 넣어야함. payload라서
                }));
                localStorage.setItem("email", value.email);
                localStorage.setItem("token", res.headers.authorization);

            navigate("/");// 홈페이지로 리다이렉트
        })
            .catch((err) => {
                console.log("err", err)
                if (err.response && err.response.data && err.response.data.error){
                    setApiErr(err.response.data.error);
                } else {
                    setApiErr("로그인 실패");
                }
        })
    };

    return <Container>
        <Box className="my-[40px] border max-w-[580px] mx-auto">
            <Box className="py-12 px-[70px]">
                <Box className="w-[440px]">
                    <div className="emailPart">
                        <label htmlFor="email"><span>이메일</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="이메일(아이디)을 입력해주세요." 
                            value={value.email}
                            onChange={handleOnChange} 
                            onBlur = {validateEmail}
                            />
                    </div>
                    { emailError && <div>{emailError}</div>}
                    <div className="passWordPart">
                        <label htmlFor="password"><span>비밀번호</span></label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="**********" 
                            value={value.password}
                            onChange={handleOnChange}
                            onBlur = {validatePassword}
                        />
                    </div>
                    {passwordError && <div>{passwordError}</div>}
                    <Button
                        disabled={isLoginError}
                        onClick = {
                            //api 요청
                            loginReq
                        }
                        className={`
                        w-full p-4 font-medium 
                        ${isLoginError ? "bg-gray-300 text-gray-500" : "bg-#ffeb00 text-black"}
                        `}
                        >
                        <span className="">로그인</span>
                    </Button>
                    {apiErr && <div>{apiErr}</div>}

                    {/* <Link href={"/"}>홈화면</Link> */}
                </Box>
            </Box>
        </Box>
    </Container>
};

export default LoginForm;