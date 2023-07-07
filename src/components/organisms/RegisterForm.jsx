import InputGroup from "../molecules/InputGroup";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import {register} from "../../services/api";
import {useEffect, useState} from "react";
import "../../styles/form.css";

// 비밀번호 조건 : 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
const PW_REGEX = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");
const EMAIL_REGEX = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$");
const NAME_REGEX = new RegExp("^[가-힣]{2,}$");

const ERROR_MSG = {
    required: "필수 입력사항입니다.",
    password: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    email: "이메일 형식이 올바르지 않습니다.",
    username: "이름은 2자 이상이어야 합니다.",
};

const RegisterForm = () => {
    const [value, handleOnChange] = useInput({
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    );

    const [errorStatus, setErrorStatus] = useState({
        email: {
            errorMsg: "",
            constraint: (input) => EMAIL_REGEX.test(input),
            isError: true
        },
        username: {
            errorMsg: "",
            constraint: (input) => NAME_REGEX.test(input),
            isError: true
        },
        password: {
            errorMsg: "",
            constraint: (input) => PW_REGEX.test(input),
            isError: true
        },
        passwordConfirm: {
            errorMsg: "",
            constraint: () => value.password === value.passwordConfirm,
            isError: true
        },
    });

    const validationCheck = (id) => {
        if (value[id].length === 0) {
            setErrorStatus({
                ...errorStatus,
                [id]: {
                    ...errorStatus[id],
                    errorMsg: ERROR_MSG.required,
                    isError: true
                }
            });
        } else if (!errorStatus[id].constraint(value[id])) {
            setErrorStatus({
                ...errorStatus,
                [id]: {
                    ...errorStatus[id],
                    errorMsg: ERROR_MSG[id],
                    isError: true
                }
            });
        } else {
            setErrorStatus({
                ...errorStatus,
                [id]: {
                    ...errorStatus[id],
                    errorMsg: "",
                    isError: false
                }
            });
        }
        return !errorStatus[id].isError;
    }

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
                errorMsg={errorStatus.email.errorMsg}
                onBlur={validationCheck.bind(this, "email")}
            />
            <InputGroup
                id="username"
                type="text"
                value={value.username}
                label="이름"
                placeholder="이름"
                onChange={handleOnChange}
                errorMsg={errorStatus.username.errorMsg}
                onBlur={validationCheck.bind(this, "username")}
            />
            <InputGroup
                id="password"
                type="password"
                value={value.password}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={handleOnChange}
                errorMsg={errorStatus.password.errorMsg}
                onBlur={validationCheck.bind(this, "password")}
            />
            <InputGroup
                id="passwordConfirm"
                type="password"
                value={value.passwordConfirm}
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                onChange={handleOnChange}
                errorMsg={errorStatus.passwordConfirm.errorMsg}
                onBlur={validationCheck.bind(this, "passwordConfirm")}
            />


            <Button
                className="register-button"
                onClick={() => {
                    if (
                        validationCheck("email") &&
                        validationCheck("username") &&
                        validationCheck("password") &&
                        validationCheck("passwordConfirm")
                    )
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
                }}
            >
                회원가입
            </Button>
        </Container>
    )
}

export default RegisterForm;