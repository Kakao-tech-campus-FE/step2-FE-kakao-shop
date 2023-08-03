import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setToken } from "../../store/slices/userSlice";
import cookies from "react-cookies"

// components
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Box from "../atoms/Box";
import InputGroup from "../molecules/InputGroup";

// request function
import { login } from "../../services/user";

const StyledContainer = styled(Container)`
    padding: 84px 0;
`;

const UserInfo = styled.div`
    margin-top: 18px;
`;

const JoinLink = styled.a`
    font-size: 1em;
    font-weight: normal;
    cursor: pointer;
    text-decoration: none;
    &:visited{
        color: black;
    }
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

const LoginForm = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.user.email);
    const token = useSelector(state => state.user.token);

    const [validMsg, setValidMsg] = useState("");
    const [isValid, setIsValid] = useState({
        email: false,
        password: false,
    });

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const checkEmailValid = (value) => {
        const emailExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/; // 영문+숫자@영문+숫자.영문+숫자
        if(!emailExp.test(value)){
            setIsValid({ ...isValid, email: false });
            setValidMsg("이메일 형식을 확인해주세요.");
        }
        else {
            setIsValid({ ...isValid, email: true });
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
    const loginReq = () => {
        dispatch(setEmail({ // store에 email 저장
            email: form.email,
        }));

        login({ // 로그인 요청
            email: form.email, 
            password: form.password
        })
        .then(res => {
            console.log("login res: ", res);
            
            dispatch(setToken({ // store에 token 저장하기
                token: res.headers.authorization,
            }));

            window.location.href = staticServerUri + "/"; // 메인페이지 리다이렉트
            alert(`login success !!`);
        })
        .catch(err => {
            console.log("login err: ", err);
            // alert('login error occured');
            alert(err.data?.error?.message);
        })
    }

    const onSubmit = () => {
        if(Object.values(isValid).every(Boolean)){
            loginReq(); // login 요청
        }
        else if(!isValid.email){
            checkEmailValid(form.email);
        }
        else if(!isValid.password){
            checkPasswordValid(form.password);
        }
    }

    return (
        <StyledContainer>
            <Title>로그인</Title>
            <InputGroup
                id="email"
                type="email" 
                placeholder="이메일" 
                label="" 
                onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                }}
                onBlur={(e) => {
                    checkEmailValid(e.target.value);
                }}
            />
            <InputGroup 
                id="password"
                type="password"
                placeholder="비밀번호"
                label=""
                onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                }}
                onBlur={(e) => {
                    checkPasswordValid(e.target.value);
                }}
            />
            <ValidMsgBox className={`${validMsg==="" ? "hidden" : "show"}`}>{validMsg}</ValidMsgBox>
            <Button
                onClick={() => { onSubmit() }}
            >로그인</Button>
            <UserInfo>
                <JoinLink href={staticServerUri + "/register"}>회원가입</JoinLink>
            </UserInfo>
        </StyledContainer>
    );
}

export default LoginForm;