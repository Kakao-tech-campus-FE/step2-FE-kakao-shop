import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
//import { useEffect } from "react";
import * as Form from '../../styles/organisms/RegisterForm';
import Footer from "../atoms/Footer";
import LinkText from "../atoms/LinkText";
import * as Link from '../../styles/atoms/Link';
import {useNavigate} from 'react-router-dom';

const RegisterForm = () => {
    const {value, handleOnChange, invalidCheck} = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const navigate = useNavigate();

    const isValid = Object.values(invalidCheck).every(
            (value) => value === true
    );

    // useEffect(() => {
    //     console.log(value.email);
    // },[value.email]);

    return(
        <>
        <Form.Container>
            <Form.Title>kakao</Form.Title>
                <Form.Box>
                <InputGroup 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="이메일" 
                    label="이메일 (아이디)" 
                    value={value.email}
                    onChange={handleOnChange}
                    invalid={invalidCheck}/>
                <InputGroup 
                    id="username" 
                    name="username"
                    type="text" 
                    placeholder="이름" 
                    label="이름"
                    value={value.username}
                    onChange={handleOnChange}
                    invalid={invalidCheck}/>
                <InputGroup 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="비밀번호" 
                    label="비밀번호"
                    value={value.password}
                    onChange={handleOnChange}
                    invalid={invalidCheck}/>
                <InputGroup 
                    id="passwordConfirm" 
                    name="passwordConfirm"
                    type="password" 
                    placeholder="비밀번호 확인" 
                    label="비밀번호 확인"
                    value={value.passwordConfirm}
                    onChange={handleOnChange}
                    invalid={invalidCheck}/>
                <Form.Button onClick={() => {
                // api 회원 가입 요청
                // register({
                //     email: value.email,
                //     password: value.password,
                //     username: value.username,
                // });
                console.log('회원가입');
                navigate("/");
                }} disabled={isValid === true ? "" : "disabled"}>회원가입</Form.Button>
                <Link.Login>
                <LinkText to="/login" text="로그인"/>
                </Link.Login>
            </Form.Box>
        </Form.Container>
        <Footer />
        </>
    );
};

export default RegisterForm;