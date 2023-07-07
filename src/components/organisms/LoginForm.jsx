import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import {login} from "../../services/api";
import {reducerLogin} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


const EMAIL_REGEX = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$");
const PW_REGEX = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");

const ERROR_MSG = {
    required: "필수 입력사항입니다.",
    password: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
    email: "이메일 형식이 올바르지 않습니다.",
};

const LoginForm = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [value, handleOnChange] = useInput({
        email: "",
        password: "",
    });

    const [errorStatus, setErrorStatus] = useState({
            email: {
                errorMsg: "",
                constraint: (input) => EMAIL_REGEX.test(input),
                isError: true
            },
            password: {
                errorMsg: "",
                constraint: (input) => PW_REGEX.test(input),
                isError: true
            }
        }
    );

    const checkValidation = (id) => {
        if (value[id].length === 0) {
            setErrorStatus({
                ...errorStatus,
                [id]: {
                    ...errorStatus[id],
                    errorMsg: ERROR_MSG.required,
                    isError: true
                }
            });
        }
        else if (!errorStatus[id].constraint(value[id])) {
            setErrorStatus({
                ...errorStatus,
                [id]: {
                    ...errorStatus[id],
                    errorMsg: ERROR_MSG[id],
                    isError: true
                }
            });
        }
        else {
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


    const loginReq = () => {
        login({
                email: value.email,
                password: value.password
            }
        ).then(res => {
                console.log(res);
                dispatch(reducerLogin(res.data.email));
                alert(user.email + "님 환영합니다.")
                window.location.href = "/";
            }
        ).catch(err => {
                console.log(err.response)
                alert(err.response)
            }
        );
    };

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
                onBlur={() => checkValidation("email")}
            />
            <InputGroup
                id="password"
                type="password"
                value={value.password}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={handleOnChange}
                errorMsg={errorStatus.password.errorMsg}
                onBlur={() => checkValidation("password")}
            />
            <Button
                className="login-button"
                onClick={() => {
                    if (checkValidation("email") && checkValidation("password"))
                        loginReq();
                }}>
                로그인
            </Button>
        </Container>
    );
}

export default LoginForm;