import { useEffect, useState } from "react";
import styled from "styled-components";


// components
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Box from "../atoms/Box";
import InputGroup from "../molecules/InputGroup";


// request function
import { register } from "../../services/user";

const StyledContainer = styled(Container)`
    padding: 44px 0;
`;

const ValidMsgBox = styled(Box)`
    width: 100%;
    padding: 20px;
    font-size: 13px;
    line-height: 20px;
    background-color: #fafafa;
    color: #e65f3e;

    .hidden {
        visibility: hidden;
    }
`;

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function RegisterForm(){
    const [validMsg, setValidMsg] = useState("");
    const [isValid, setIsValid] = useState({
        username: false,
        email: false,
        password: false,
        passwordCofirm: false,
    });
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const checkEmailValid = (value) => {
        const emailExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/; // 영문+숫자@영문+숫자.영문+숫자
        if(!emailExp.test(value)){
            setIsValid({ ...isValid, email: false });
            setValidMsg("이메일 형식을 확인해주세요.");
        }
        else {
            // 이메일 중복확인
            setIsValid({ ...isValid, email: true });
            setValidMsg("");
        }
    }
    const checkUsernameValid = (value) => {
        if(value === ""){
            setIsValid({ ...isValid, username: false });
            setValidMsg("이름을 입력해주세요.");
        }
        else {
            setIsValid({ ...isValid, username: true });
            setValidMsg("");
        }
    }
    const checkPasswordValid = (value) => {
        const passwordExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,20}$/;
        if(!passwordExp.test(value)){
            setIsValid({ ...isValid, password: false });
            setValidMsg("비밀번호는 영문, 숫자, 특수문자를 포함한 8~20자 사이여야 합니다.");
        }
        else {
            setIsValid({ ...isValid, password: true });
            setValidMsg("");
        }
    }
    const checkPasswordConfirmValid = (value) => {
        if(form.password === value){
            setIsValid({ ...isValid, passwordCofirm: true });
        }
        else {
            setIsValid({ ...isValid, passwordCofirm: false });
            setValidMsg("비밀번호 확인이 일치하지 않습니다.");
        }
    }


    const registerReq = () => {
        

        register({
            email: form.email,
            password: form.password,
            username: form.username
        })
        .then(res => {
            console.log("register res: ", res);

            window.location.href = staticServerUri + "/"; // 메인페이지 리다이렉트
            alert("register success !!");
        })
        .catch(err => {
            console.log("register err: ", err);
            // alert(err.data.error.message);
        })
    }

    const onSubmit = () => {                    
            if(Object.values(isValid).every(Boolean)){
                registerReq(); // 회원가입 요청
            }
            else if(!isValid.email){
                checkEmailValid(form.email);
            }
            else if(!isValid.username){
                checkUsernameValid(form.username);
            }
            else if(!isValid.password){
                checkPasswordValid(form.password);
            }
            else if(!isValid.passwordCofirm){
                checkPasswordConfirmValid(form.passwordConfirm);
            }
    }

    return (
        <StyledContainer>
            <Title>회원가입</Title>
            <InputGroup
                id="email"
                type="email" 
                placeholder="이메일" 
                label="이메일 (아이디)" 
                value={form.email}
                onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                }}
                onBlur={(e) => {
                    checkEmailValid(e.target.value);
                }}
            />
            <InputGroup
                id="username" 
                type="text" 
                placeholder="이름" 
                label="이름"
                value={form.username}
                onChange={(e) => {
                    setForm({ ...form, username: e.target.value });
                }}
                onBlur={(e) => {
                    checkUsernameValid(e.target.value);
                }}
            />
            <InputGroup 
                id="password"
                type="password"
                placeholder="*********"
                label="비밀번호"
                value={form.password}
                onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                }}
                onBlur={(e) => {
                    checkPasswordValid(e.target.value);
                }}
            />
            <InputGroup 
                id="passwordConfirm"
                type="password"
                placeholder="*********"
                label="비밀번호 확인"
                value={form.passwordConfirm}
                onChange={(e) => {
                    setForm({ ...form, passwordConfirm: e.target.value });
                }}
                onBlur={(e) => {
                    checkPasswordConfirmValid(e.target.value);
                }}
            />
            <ValidMsgBox className={`${validMsg==="" ? "hidden" : "show"}`}>{validMsg}</ValidMsgBox>
            <div style={{marginTop: "30px"}}>
            <Button
                onClick={() => {onSubmit()}}
            >회원가입</Button>
            </div>
            
        </StyledContainer>
    );

}

