import InputGroup from "../molecules/InputGroup";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import {register} from "../../services/api";

// 비밀번호 조건 : 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
const PW_REGEX = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");
const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$");
const NAME_REGEX = new RegExp("^[가-힣]{2,}$");

const ERROR_MSG = {
    required: "필수 입력사항입니다.",
    invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
    invalidPw: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
    invalidPwCheck: "비밀번호가 일치하지 않습니다.",
    invalidEmail: "이메일 형식이 올바르지 않습니다.",
    invalidName: "이름은 2자 이상이어야 합니다.",
};


const RegisterForm = () => {
    const [value, handleOnChange] = useInput({
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }
    );

    const FORM_CONSTRAINTS = {
        username: {
            constraint: () => NAME_REGEX.test(value.username),
            error: ERROR_MSG.invalidName,
        },
        email: {
            constraint: () => EMAIL_REGEX.test(value.email),
            error: ERROR_MSG.invalidEmail,
        },
        password: {
            constraint: () => PW_REGEX.test(value.password),
            error: ERROR_MSG.invalidPw,
        },
        passwordConfirm: {
            constraint: () => value.password === value.passwordConfirm,
            error: ERROR_MSG.invalidPwCheck,
        },
    };

    return (
        <Container className={`register-form`}>
            <InputGroup
                id="email"
                type="text"
                value={value.email}
                label="이메일 (아이디)"
                placeholder="이메일"
                onChange={handleOnChange}
                error={ERROR_MSG.invalidEmail}
                constraint={FORM_CONSTRAINTS.email.constraint}
            />
            <InputGroup
                id="username"
                type="text"
                value={value.username}
                label="이름"
                placeholder="이름"
                onChange={handleOnChange}
                error={ERROR_MSG.invalidName}
                constraint={FORM_CONSTRAINTS.username.constraint}
            />
            <InputGroup
                id="password"
                type="password"
                value={value.password}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={handleOnChange}
                error={ERROR_MSG.invalidPw}
                constraint={FORM_CONSTRAINTS.password.constraint}
            />
            <InputGroup
                id="passwordConfirm"
                type="password"
                value={value.passwordConfirm}
                label="비밀번호 확인"
                placeholder="비밀번호 확인"
                onChange={handleOnChange}
                error={ERROR_MSG.invalidPwCheck}
                constraint={FORM_CONSTRAINTS.passwordConfirm.constraint}
            />
            <Button
                className="register-button"
                onClick={() => {
                    if (FORM_CONSTRAINTS.username.constraint(value.username) &&
                        FORM_CONSTRAINTS.email.constraint(value.email) &&
                        FORM_CONSTRAINTS.password.constraint(value.password) &&
                        FORM_CONSTRAINTS.passwordConfirm.constraint(value.passwordConfirm))
                        register({
                            email: value.email,
                            password: value.password,
                            username: value.username
                        })
                }}
            >
                회원가입
            </Button>
        </Container>
    )
}

export default RegisterForm;