import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
//import { useEffect } from "react";
import * as Form from '../../styles/organisms/RegisterForm';
import Footer from "../atoms/Footer";
import {useNavigate} from 'react-router-dom';
import LinkText from "../atoms/LinkText";
import * as Link from '../../styles/atoms/Link';

const LoginForm = () => {
    const {value, handleOnChange, invalidCheck} = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(value.email);
    // },[value.email]);

    const isValid = invalidCheck['email'] === true && invalidCheck['password'] === true;

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
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="비밀번호" 
                    label="비밀번호"
                    value={value.password}
                    onChange={handleOnChange}
                    invalid={invalidCheck}/>
                <Form.Button onClick={() => {
                // api 회원 가입 요청
                // register({
                //     email: value.email,
                //     password: value.password,
                //     username: value.username,
                // });
                console.log('로그인');
                navigate("/");
                }} disabled={isValid === true ? "" : "disabled"}>로그인</Form.Button>
                <Link.SignUp>
                <LinkText to="/signup" text="회원가입"/>
                </Link.SignUp>
            </Form.Box>
        </Form.Container>
        <Footer />
        </>
    );
};

export default LoginForm;