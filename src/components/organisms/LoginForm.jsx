import React, { useState } from 'react';
import styled from "styled-components";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import LinkText from "../atoms/LinkText";
import { login } from '../../services/user';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { setLocalStorageWithExp } from "../../utils/localStorage";
import { useNavigate } from 'react-router-dom';
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

const LoginForm = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const { value, handleOnChange } = useInput({
        email: "",
        password: "",
    });

    const [invalidCheck, setInvalidCheck] = useState({
        email: "",
        password: "",
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
                case 'password':
                    result = PW_REGEX.test(inputValue) ? true : 'invalidPw';
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

    const loginReq = () => {
        login({
            email: value.email,
            password: value.password,
        })
            .then((res) => {
                setError('');
                dispatch(setUser({
                    user: value.user,
                }));
                
                setLocalStorageWithExp("user", res.headers.authorization, 1000 * 60 * 60 * 24);
                navigate(staticServerUri + "/");
            })
            .catch((error) => {
				if (error.response && error.response.status === 401) {
					console.log(error.response.data.message);
					alert("회원 정보가 존재하지 않습니다.");
					console.log("401 에러");
				} else {
					console.log(error);
				}
                setError(error.toString());
				alert("회원정보가 존재하지 않습니다.");
            });
    };

    const navigate = useNavigate();

    const isValid = Object.values(invalidCheck).every((value) => value === true);

    return (
        <>
            <Container>
                <Title>로그인</Title>
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
                    {error !== '' ? <div className="bg-gray-50 border border-gray-100 text-red-600">{error}</div> : null}
                    <Button disabled={!isValid} onClick={loginReq} >로그인</Button>
                    {error && <div>{setError}</div>}
					<div className="text-0.8em mt-1.5em">
                        <LinkText to={staticServerUri + "/signup"} text="회원가입" />
                    </div>
                </Box>
            </Container>
        </>
    );
};

export default LoginForm;