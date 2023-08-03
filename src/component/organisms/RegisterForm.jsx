import Container from "../atoms/Container";
import Link from "../atoms/Link";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register, emailCheck } from "../../services/user";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from "../atoms/Box";


const RegisterForm = () => {

    const navigate = useNavigate();
    const {
        value, 
        handleOnChange, 
        emailError,
        validateEmail,
        passwordError,
        validatePassword,
    } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [apiErr, setApiErr] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const isRegisterError = (emailError || passwordError || value.username === "" || value.email === "" || value.password === "" || value.passwordConfirm==="") ? true: false ;

    const registerReq = () => {
        register({
            email : value.email,
            password : value.password,
            username : value.username,
        })
            .then((res) => {
                navigate("/")
            })
            .catch((err) => {
                console.log("err", err)
                if (err.response && err.response.data && err.response.data.error){
                    setApiErr(err.response.data.error);
                } else {
                    setApiErr("회원가입이 실패했습니다.");
                }
            })
    }

    const emailCheckReq = () => {
        emailCheck({
            email : value.email,
        })
            .then((res => {
                alert("사용 가능한 이메일입니다.");
            }))
            .catch((err) => {
                alert(err);
            })
    }

    const pwConfirm = () => {
        if (value.password !== value.passwordConfirm) {
            setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
          } else if (value.password === "") {
            setPasswordConfirmError("비밀번호를 확인해주세요.")
          }
          else {
            setPasswordConfirmError("");
          }
        };


    return <Container className="register">
        <Box className="mt-14">
            <span className="block text-[30px] font-semibold m-auto w-[88px]">kakao</span>
        </Box>
            <Box className="my-[40px] border max-w-[580px] mx-auto">
                <Box className="py-12 px-[70px]">
                    <Box className="w-[440px]">
                        <div className="emailPart border-b-2 border-#ccc focus-within:border-black"> 
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="사용자 이름을 입력해주세요." 
                                value={value.username}
                                onChange={handleOnChange}
                                className="w-[100%] text-lg py-2.5 focus:outline-none"
                            />
                        </div>
                        <div className={`flex emailPart border-b-2 border-#ccc mt-4 focus-within:border-black ${emailError ? "border-red-600" : ""}`}>
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                placeholder="이메일(아이디)을 입력해주세요." 
                                value={value.email}
                                onChange={handleOnChange} 
                                onBlur = {validateEmail}
                                className="w-[100%] text-lg py-2.5 focus:outline-none"
                            />
                            <div className="flex items-center ml-2 px-2">
                                <button onClick={() => emailCheckReq()} 
                                    className = "w-14 h-8 bg-#ffeb00 "
                                >
                                    <span className="text-xs">중복체크</span>
                                </button>
                            </div>
                        </div>
                        { emailError && <div><span className="ml-2 text-red-600">! </span><span className="text-sm">{emailError}</span></div>}
                        
                        <div className={`emailPart border-b-2 border-#ccc mt-4 focus-within:border-black ${passwordError ? "border-red-600" : ""}`}>
                            <input 
                                type="password" 
                                id = "password"  
                                name="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={value.password} 
                                onChange={handleOnChange} 
                                onBlur = {validatePassword}
                                className="w-[100%] text-lg py-2.5 focus:outline-none"
                            />
                        </div>
                        {passwordError && <div><span className="ml-2 text-red-600">! </span><span className="text-sm">{passwordError}</span></div>}

                        <div className={`emailPart border-b-2 border-#ccc mt-4 focus-within:border-black ${passwordConfirmError ? "border-red-600" : ""}`}>
                            <input 
                                type="password" 
                                id = "passwordConfirm"
                                name="passwordConfirm"
                                placeholder="비밀번호를 확인하기 위해 다시 입력해주세요."     
                                value={value.passwordConfirm} 
                                onChange={handleOnChange} 
                                onBlur = {pwConfirm}
                                className="w-[100%] text-lg py-2.5 focus:outline-none"
                            />
                        </div>
                        {passwordConfirmError && <div><span className="ml-2 text-red-600">! </span><span className="text-sm">{passwordConfirmError}</span></div>}

                        {apiErr && <div className="w-full bg-gray-100 text-center py-4 mt-10">
                                    <span className="text-xs text-red-600">{apiErr}</span>
                                </div>
                        }
                        <Button 
                            disabled={isRegisterError}
                            onClick = {() => {
                                //api 회원가입 요청
                                registerReq()
                            }}
                            className="w-full p-4 font-medium mt-10 bg-#ffeb00 text-black hover:bg-yellow-300"
                        >회원가입</Button>
                        <Box className="flex place-content-end mt-10 text-xs">
                            <Link href={"/"}>Home</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
    </Container>
};

export default RegisterForm;