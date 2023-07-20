import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { register } from "../../services/index";
import GNB from "../molecules/Gnb";
import Alert from "../atoms/Alert";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onRegisterSuccess }) => {
    const navigate = useNavigate();

    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        const emailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
        if (!emailPattern.test(value.email)) {
            setEmailError("이메일 형식이 올바르지 않습니다.");
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePassword = () => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        if (!passwordPattern.test(value.password)) {
            setPasswordError("비밀번호 형식이 올바르지 않습니다.");
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleRegister = () => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            // 회원가입 요청
            register({
                email: value.email,
                password: value.password,
                username: value.username,
            })
                .then(() => {
                    // 회원가입 성공 후 리디렉션을 수행
                    onRegisterSuccess(); // 부모 컴포넌트로부터 전달받은 콜백 호출
                    navigate("/login"); // 로그인 페이지로 리디렉션
                })
                .catch((error) => {
                    // 회원가입 실패 시에 대한 처리
                    console.log("회원가입 실패:", error);
                });
        }
    };

    return (
        <Container>
            <GNB showRegisterButton={false} />
            {emailError && <Alert message={emailError} />}
            {passwordError && <Alert message={passwordError} />}
            <InputGroup
                id="username"
                name="username"
                type="text"
                placeholder="사용자 이름을 입력해주세요"
                label="이름"
                value={value.username}
                onChange={handleOnChange}
            />
            <InputGroup
                id="email"
                name="email"
                type="email"
                placeholder="이메일(아이디)를 입력해주세요"
                label="이메일"
                value={value.email}
                onChange={handleOnChange}
            />
            <InputGroup
                id="password"
                name="password"
                type="password"
                placeholder="***********"
                label="비밀번호"
                value={value.password}
                onChange={handleOnChange}
            />
            <InputGroup
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="***********"
                label="비밀번호 확인"
                value={value.passwordConfirm}
                onChange={handleOnChange}
            />
            <Button onClick={handleRegister}>회원가입</Button>
        </Container>
    );
};

export default RegisterForm;
