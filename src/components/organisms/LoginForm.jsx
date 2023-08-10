
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import styled from "styled-components";

import routes from '../../routes/routes'
import { useNavigate } from 'react-router-dom';

import Question from "../atoms/Question";
import { useState, useEffect } from "react";
import { emailCheck, passwordCheck } from "../../services/regex";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, setEmail } from "../../store/slices/userSlice";
import { login } from "../../services/user";
const staticServerUri = process.env.REACT_APP_PATH || "";


const LoginForm = () => {
    // reducer 함수를 호출하기 위해서는 dispatch를 호출해야한다!(규칙)
    //const dispatch = useDispatch();

    // redux에서 값을 가져올때는 useSelector라는 훅을 사용한다.
    // 여기에서 사용하는 state는 모든 변수를 다담고 있는 state이다.

    // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다

   // const email = useSelector((state) => state.user.email);

    const navigate = useNavigate();
    const { valueInit, handleOnChange } = useInput(
        {
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }

    );
    const [isEmail, setIsEmail] = useState(true);
    const [whatEmail, setWhatEmail] = useState("");
    const [isPassword, setIsPassword] = useState(true);

    

    useEffect((e) => {
        console.log(valueInit.email);
        if (valueInit.email.length > 0) {
            setIsEmail(emailCheck(valueInit.email));
            setWhatEmail(valueInit.email);
        }
    }, [valueInit.email]);

    useEffect((e) => {
        console.log(valueInit.password);

        if (valueInit.password.length > 0) {
            setIsPassword(passwordCheck(valueInit.password));
        }
    }, [valueInit.password]);

    return (
        <>
            <LogoStyle><p onClick={() => { navigate(routes.home); }}>kakao</p></LogoStyle>

            <Container>
                <InputGroup id='email' type='email' placeholder='이메일(아이디)를 입력해주세요' label="이메일"
                    value={valueInit.email}
                    onChange={(e) => {
                        handleOnChange(e);
                    }
                    }
                    para={isEmail ? null : "이메일 형식으로 작성해주세요. "} />
                <InputGroup id='password' type='password' placeholder='비밀번호를 입력해주세요' label="비밀번호"
                    value={valueInit.password}
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    para={isPassword ? null : "비밀번호는 영문, 숫자, 특수문자가 포함된 8~20자로 구성되어야 합니다."} />

                <Button
                    onClick={(e) => {
                        console.log(valueInit.email);
                        console.log(valueInit.password);
                        if (valueInit.email == '') {
                            alert('이메일을 작성해주세요.');
                        }
                        if (valueInit.password == '') {
                            alert('비밀번호를 작성해주세요.');
                        }

                        else if (isEmail && isPassword) {
                            // dispatch(loginRequest({
                            //     email: valueInit.email,
                            //     password: valueInit.password,
                            // }));
                            login({
                                email: valueInit.email,
                                password: valueInit.password,
                              }).then((res)=>{
                                localStorage.setItem("token", res.headers.authorization);
                                localStorage.setItem("email", whatEmail);
                                window.location.href = staticServerUri+'/';
                              })
                        }
                    }}>로그인</Button>
                <Question para='계정이 없으신가요?' children="회원가입" onClick={() => { navigate(routes.signUp); }}></Question>
            </Container >
        </>

    );
};

const LogoStyle = styled.h1`
    display: flex;
    justify-content: center;
    margin-top:5rem;

    color: #edb200;
    font-weight: 800;
`


export default LoginForm;
