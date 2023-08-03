import Container from "../atoms/Container";
import Link from "../atoms/Link";
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
    const staticServerUri = process.env.REACT_APP_PATH || "";

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
                dispatch(setEmail({
                    email: value.email, //객체 형태로 넣어야함. payload라서
                }));
                localStorage.setItem("email", value.email);
                localStorage.setItem("token", res.headers.authorization);

            navigate(staticServerUri + "/");// 홈페이지로 리다이렉트
        })
            .catch((err) => {
                console.log("err", err)
                if (err.response && err.response.data && err.response.data.error){
                    setApiErr(err.response.data.error);
                } else {
                    setApiErr("아이디 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.");
                }
        })
    };

    return <Container>
        <Box className="mt-14">
            <span className="block text-[30px] font-semibold m-auto w-[88px]">kakao</span>
        </Box>
        <Box className="my-[40px] border max-w-[580px] mx-auto">
            <Box className="py-12 px-[70px]">
                <Box className="w-[440px]">
                    <div className={`emailPart border-b-2 border-#ccc mt-4 focus-within:border-black ${emailError ? "border-red-600" : ""}`}>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="이메일(아이디)을 입력해주세요." 
                            value={value.email}
                            onChange={handleOnChange} 
                            onBlur = {validateEmail}
                            className="w-[100%] text-lg py-2.5 focus:outline-none"
                            />
                    </div>
                    { emailError && <div><span className="ml-2 text-red-600">! </span><span className="text-sm">{emailError}</span></div>}

                    <div className={`emailPart border-b-2 border-#ccc mt-4 focus-within:border-black ${passwordError ? "border-red-600" : ""}`}>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="비밀번호"
                            value={value.password}
                            onChange={handleOnChange}
                            onBlur = {validatePassword}
                            className="w-[100%] text-lg py-2.5 focus:outline-none"
                        />
                    </div>
                    {passwordError && <div><span className="ml-2 text-red-600"> ! </span><span className="text-sm">{passwordError}</span></div>}

                    {apiErr && <div className="w-full bg-gray-100 text-center py-4 mt-10">
                                    <span className="text-xs text-red-600">{apiErr}</span>
                                </div>
                    }
                    <Button
                        disabled={isLoginError}
                        onClick = {
                            //api 요청
                            loginReq
                        }
                        className="w-full p-4 font-medium mt-10 bg-#ffeb00 text-black hover:bg-yellow-300"
                        >
                        <span className="font-medium">로그인</span>
                    </Button>
                    <div >
                        <span className=" flex justify-center items-center
                        before:inline-block before:content-[''] before:w-[190px] before:h-[1px] before:bg-opacity-10 before:bg-black 
                        after:inline-block after:content-[''] after:w-[190px] after:h-[1px] after:bg-opacity-10 after:bg-black  
                        "><span className="block w-[40px] text-center mx-auto my-4 text-gray-400 text-xs">또는</span></span>
                    </div>
                    <Link href={"/signup"}
                        className="block w-full p-4 font-medium bg-gray-200 text-black text-center hover:bg-gray-300"
                    ><span className="font-medium">회원가입</span>
                    </Link>
                </Box>
                <Box className="flex place-content-end mt-10 text-xs">
                    <Link href={"/"}>Home</Link>
                </Box>
            </Box>
        </Box>
    </Container>
};

export default LoginForm;