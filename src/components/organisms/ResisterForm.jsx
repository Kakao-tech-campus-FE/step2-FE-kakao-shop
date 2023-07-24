
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import routes from '../../routes/routes'
import { useNavigate } from 'react-router-dom';
import { register, doubleCheck } from "../../services/user";
import Question from "../atoms/Question";
import { useState, useEffect } from "react";
import DoubleCheck from '../atoms/DoubleCheck';
import { emailCheck, passwordCheck, passwordReCheck } from "../../services/regex";


const LogoStyle = styled.h1`
    display: flex;
    justify-content: center;
    margin-top:5rem;

    color: #edb200;
    font-weight: 800;
`

const ResisterForm = () => {
    const navigate = useNavigate();
    const { valueInit, handleOnChange } = useInput(
        {
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }

    );
    const [isName, setIsName] = useState(true);
    const [isEmail, setIsEmail] = useState(true);
    const [whatEmail, setWhatEmail] = useState("");
    const [doubleEmail, setDoubleEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(true);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

    const emailDoubleCheck = (email) => {
        doubleCheck(email).then((e) => {
            setDoubleEmail(true)
            alert("사용가능한 이메일 입니다.");
        })
            .catch((e) => {
                setDoubleEmail(false)
                alert("동일한 이메일이 존재합니다.");
            });
    };


    useEffect((e) => {
        if (valueInit.username.length > 0) {
            setIsName(true);
        }
    }, [valueInit.username]);
    useEffect((e) => {
        if (valueInit.email.length > 0) {
            setIsEmail(emailCheck(valueInit.email));
            setWhatEmail(valueInit.email);
        }
    }, [valueInit.email]);

    useEffect((e) => {
        if (valueInit.password.length > 0) {
            setIsPassword(passwordCheck(valueInit.password));
        }
    }, [valueInit.password]);
    useEffect((e) => {
        if (valueInit.passwordConfirm.length > 0) {

            setIsPasswordConfirm(passwordReCheck(valueInit.password, valueInit.passwordConfirm));
        }
    }, [valueInit.passwordConfirm]);


    return (
        <>
            <LogoStyle><p onClick={() => { navigate(routes.home); }}>kakao</p></LogoStyle>

            <Container>

                <InputGroup
                    id='username' type='text' placeholder='사용자 이름을 입력해주세요' label="이름"
                    value={valueInit.username}
                    onChange={handleOnChange}
                    para={isName ? null : "필수 입력사항 입니다."} />


                <InputGroup id='email' type='email' placeholder='이메일(아이디)를 입력해주세요' label="이메일"
                    value={valueInit.email}
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    para={isEmail ? null : "이메일 형식으로 작성해주세요. "}
                />
                <DoubleCheck onClick={(e) => {
                    if (isEmail === true && whatEmail.length > 0) {
                        e.preventDefault();
                        console.log(whatEmail);
                        emailDoubleCheck(whatEmail);
                    }

                }}></DoubleCheck>

                <InputGroup id='password' type='password' placeholder='비밀번호를 입력해주세요' label="비밀번호"
                    value={valueInit.password}
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    para={isPassword ? null : "비밀번호는 영문, 숫자, 특수문자가 포함된 8~20자로 구성되어야 합니다."} />
                <InputGroup id='passwordConfirm' type='password' placeholder='비밀번호 확인' label="비밀번호 확인"
                    value={valueInit.passwordConfirm}
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    para={isPasswordConfirm ? null : "비밀번호가 다릅니다."} />

                <Button
                    onClick={() => {
                        if (doubleEmail === false) {
                            alert("이메일 중복확인을 해주세요");
                        }

                        //회원가입 요청
                        if (doubleEmail && isName && isEmail && isPassword && isPasswordConfirm) {
                            register({
                                "email": valueInit.email,
                                "password": valueInit.password,
                                "username": valueInit.username
                            })
                            alert("회원가입 성공!");
                            navigate(routes.logIn);
                        }

                    }}>회원가입</Button>
                <Question para='계정이 있으신가요?' children="로그인" onClick={() => { navigate(routes.logIn); }}></Question>
            </Container >
        </>

    );
};

export default ResisterForm;