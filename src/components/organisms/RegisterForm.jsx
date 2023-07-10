import InputGroup from "../molecules/InputGroup";
import Container from "../atoms/Container";
import Button from "../atoms/Button";

import {register} from "../../services/api";
import {useEffect, useState} from "react";

import "../../styles/form.css";

import {useDispatch, useSelector} from "react-redux";
import {setEmail, setUsername, setPassword, setPasswordConfirm, validate} from "../../store/slice/registerSlice";

const RegisterForm = () => {

    const errorStatus = useSelector(state => state.registerForm);
    const dispatch = useDispatch();

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
                value={errorStatus.email.value}
                label="이메일 (아이디)"
                placeholder="이메일"
                onChange={(event) => dispatch(setEmail(event.target.value))}
                errorMsg={errorStatus.email.errorMsg}
                onBlur={() => {
                    dispatch(validate({id: "email"}))
                }}
            />
            <InputGroup
                id="username"
                type="text"
                value={errorStatus.username.value}
                label="이름"
                placeholder="이름"
                onChange={(event) => dispatch(setUsername(event.target.value))}
                errorMsg={errorStatus.username.errorMsg}
                onBlur={() => dispatch(validate({id: "username"}))}
            />
            <InputGroup
                id="password"
                type="password"
                value={errorStatus.password.value}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={(event) => dispatch(setPassword(event.target.value))}
                errorMsg={errorStatus.password.errorMsg}
                onBlur={() => dispatch(validate({id: "password"}))}
            />
            <InputGroup
                id="passwordConfirm"
                type="password"
                value={errorStatus.passwordConfirm.value}
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                onChange={(event) => dispatch(setPasswordConfirm(event.target.value))}
                errorMsg={errorStatus.passwordConfirm.errorMsg}
                onBlur={() => dispatch(validate({id: "passwordConfirm"}))}
            />

            <Button
                className="register-button"
                onClick={() => {
                    if (
                        !Object.keys(errorStatus).find(
                            (key) => {
                                dispatch(validate({id: key}));
                                return !errorStatus[key].isValid
                            }))
                        register({
                            email: errorStatus.email.value,
                            password: errorStatus.password.value,
                            username: errorStatus.username.value
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
