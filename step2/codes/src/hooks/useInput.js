import { useState } from "react";
// const [emailError, setEmailError] = useState(null);
// const [passwordError, setPasswordError] = useState(null);

const useInput = (initialValue, validate) => {
    const [value, setValue] = useState(initialValue);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    // 입력값을 화면에 반영하는 역할
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value })); //set 함수는 prev 상태에 대해서 변경하는 게 좋음!
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.email) {
            setEmailError("이메일을 입력해주세요");
        } else if (!emailRegex.test(value.email)) {
            setEmailError("이메일 형식에 맞게 입력해주세요.");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (password) => {
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}$/;

        if (!value.password) {
            setPasswordError("비밀번호를 입력하세요.");
        } else if (!passwordRegex.test(value.password)) {
            setPasswordError(
                "8-20자 이내의 영문, 숫자, 특수문자가 포함되어야합니다."
            );
        } else setPasswordError("");
    };

    return {
        value,
        handleOnChange,
        emailError,
        validateEmail,
        passwordError,
        validatePassword,
    };
};

export default useInput;
