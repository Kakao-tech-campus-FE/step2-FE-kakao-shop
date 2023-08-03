import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import LinkText from "../atoms/LinkText";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { setLocalStorageWithExp } from "../../utils/localStorage";
import Title from "../atoms/Title";
import { EMAIL_REGEX, PW_REGEX } from "../../utils/regex";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    border: 1px solid #c9c8c8;
    padding: 2em;
    margin-bottom: 1em;
`;

const Button = styled.button`
    background-color: #fee500;
    border-width: 0;
    font-size: 1em;
    border-radius: 0px;
    width: 25em;
    height: 3em;
    pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [invalidCheck, setInvalidCheck] = useState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
    });

    const checkRegex = (inputName, inputValue) => {
        let result;
        if (value[inputName].length === 0) {
            result = 'required';
        } else {
            switch (inputName) {
                case 'email':
                    result = EMAIL_REGEX.test(inputValue) ? true : 'invalidEmail';
                    break;
                case 'username':
                    result = true;
                    break;
                case 'password':
                    result = PW_REGEX.test(inputValue) ? true : 'invalidPw';
                    if (value['passwordConfirm']) {
                        checkRegex('passwordConfirm', value['passwordConfirm']);
                    }
                    break;
                case 'passwordConfirm':
                    result = inputValue === value['password'] ? true : 'invalidConfirmPw';
                    break;
                default:
                    return;
            }
        }
        setInvalidCheck((prev) => ({ ...prev, [inputName]: result }));
    };

    const handleOnCheck = (e) => {
        const { name, value } = e.target;
        checkRegex(name, value);
    };

    const registerReq = () => {
        register({
            email: value.email,
            password: value.password,
            username: value.username,
        })
            .then((res) => {
                setError("");
                dispatch(setUser({
                    user: value.user,
                }));
                setLocalStorageWithExp("user", res.headers.authorization, 1000 * 60 * 60 * 24);
                navigate(staticServerUri + "/");
            })
            .catch((err) => {
                console.log(err.request.response);
                const errObject = JSON.parse(err.request.response);
                setError(errObject.error.message);
            });
    };


    const navigate = useNavigate();
    const isValid = Object.values(invalidCheck).every((value) => value === true);

    return (
        <>
            <Container>
                <Title>회원가입</Title>
                <Box>
                    <InputGroup
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일"
                        label="이메일 (아이디)"
                        value={value.email}
                        onChange={handleOnChange}
                        onBlur={handleOnCheck}
                        invalid={invalidCheck}
                    />
                    <InputGroup
                        id="username"
                        name="username"
                        type="text"
                        placeholder="이름"
                        label="이름"
                        value={value.username}
                        onChange={handleOnChange}
                        onBlur={handleOnCheck}
                        invalid={invalidCheck}
                    />
                    <InputGroup
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        label="비밀번호"
                        value={value.password}
                        onChange={handleOnChange}
                        onBlur={handleOnCheck}
                        invalid={invalidCheck}
                    />
                    <InputGroup
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호 확인"
                        label="비밀번호 확인"
                        value={value.passwordConfirm}
                        onChange={handleOnChange}
                        onBlur={handleOnCheck}
                        invalid={invalidCheck}
                    />
                    {error !== '' ? <div className="bg-gray-50 border border-gray-100 text-red-600">{error}</div> : null}
                    <Button
                        onClick={() => {
                            registerReq();
                        }}
                        disabled={isValid === true ? "" : "disabled"}
                    >
                        회원가입
                    </Button>
                    <div className="text-0.8em mt-1.5em">
                        <LinkText to=staticServerUri + "/login" text="로그인" />
                    </div>
                </Box>
            </Container>
        </>
    );
};

export default RegisterForm;