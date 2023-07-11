import InputGroup from "../molecules/InputGroup";
import Container from "../atoms/Container";
import Button from "../atoms/Button";

import {register} from "../../services/api";
import {useEffect, useState} from "react";

import "../../styles/form.css";
import useInput from "../../hooks/useInput";

const RegisterForm = () => {

    const {value, handleOnChange, errorMsg, validateInput} = useInput({
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
    });

    const [errorFromBE, setErrorFromBE] = useState(null);

    useEffect(() => {
        if (errorFromBE) {
            alert(errorFromBE);
            setErrorFromBE(null);
        }
    }, [errorFromBE]);

    return (
        <Container className={`form`}>
            <InputGroup
                id="email"
                type="text"
                value={value.email}
                label="이메일 (아이디)"
                placeholder="이메일"
                onChange={handleOnChange}
                errorMsg={errorMsg.email}
                onBlur={() => validateInput("email")}
            />
            <InputGroup
                id="username"
                type="text"
                value={value.username}
                label="이름"
                placeholder="이름"
                onChange={handleOnChange}
                errorMsg={errorMsg.username}
                onBlur={() => validateInput("username")}
            />
            <InputGroup
                id="password"
                type="password"
                value={value.password}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={handleOnChange}
                errorMsg={errorMsg.password}
                onBlur={() => validateInput("password")}
            />
            <InputGroup
                id="passwordConfirm"
                type="password"
                value={value.passwordConfirm}
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                onChange={handleOnChange}
                errorMsg={errorMsg.passwordConfirm}
                onBlur={() => validateInput("passwordConfirm")}
            />

            <Button
                className="register-button"
                onClick={() => {
                    if (
                        !Object.keys(value).find(
                            (key) => validateInput(key) === false
                        ))
                        register({
                            email: value.email,
                            password: value.password,
                            username: value.username
                        }).then(
                            res => {
                                console.log(res);
                                alert("회원가입이 완료되었습니다. 로그인해주세요.");
                                window.location.href = "/";
                            }
                        ).catch(
                            err => {
                                console.log(err);
                                setErrorFromBE(err.response.data.error.message);
                            }
                        )
                }}>
                회원가입
            </Button>
        </Container>
    )
}
export default RegisterForm;
