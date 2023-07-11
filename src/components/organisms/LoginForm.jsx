import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import {login} from "../../services/api";
import {reducerLogin} from "../../store/slice/userSlice";
import {useDispatch} from "react-redux";

const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const PW_REGEX = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");

const LoginForm = () => {
    const dispatch = useDispatch();

    const {value, handleOnChange, validateInput, errorMsg} = useInput({
        value: {
            email: "",
            password: "",
        },
        ERROR_MSG: {
            required: "필수 입력사항입니다.",
            password: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
            email: "이메일 형식이 올바르지 않습니다.",
        },
        constraints: {
            email: (input) => EMAIL_REGEX.test(input["email"]),
            password: (input) => PW_REGEX.test(input["password"]),
        }
    });

    const loginReq = () => {
        login({
                email: value.email,
                password: value.password
            }
        ).then(res => {
                dispatch(reducerLogin(res.data.email));
                alert(res.data.email + "님 환영합니다.")
                window.location.href = "/";
            }
        ).catch(err => {
                // console.log(err)
                // alert(err)
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
                errorMsg={errorMsg.email}
                onBlur={() => validateInput("email")}
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
            <Button
                className="login-button"
                onClick={() => {
                    if (validateInput("email") && validateInput("password"))
                        loginReq();
                }}>
                로그인
            </Button>
        </Container>
    );
}

export default LoginForm;