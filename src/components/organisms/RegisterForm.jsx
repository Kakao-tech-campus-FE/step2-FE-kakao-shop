import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import {useEffect, useState} from "react";
import useInput from "../../hooks/useInput";

const RegisterForm = ({onSubmit, onChange, form}) => {
    const {value, handleOnChange} = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    useEffect(() => {

    }, [value.username, value.email, value.password, value.passwordConfirm])

    return (
        <Container>
            <InputGroup
                id="username"
                type="text"
                placeholder={"사용자 이름을 입력해주세요"}
                value={value.username}
                label={"이름"}
                onChange={handleOnChange}/>
            <InputGroup
                id={"email"}
                type={"email"}
                placeholder={"이메일(아이디)를 입력해주세요"}
                value={value.email}
                label={"이메일"}
                onChange={handleOnChange}/>
            <InputGroup
                id={"password"}
                type={"password"}
                placeholder={"비밀번호"}
                value={value.password}
                label={"비밀번호"}
                onChange={handleOnChange}/>
            <InputGroup
                id={"passwordConfirm"}
                type={"password"}
                placeholder={"비밀번호 확인"}
                value={value.passwordConfirm}
                label={"비밀번호 확인"}
                onChange={handleOnChange}/>
            <Button onClick={(e) => {
                e.preventDefault();
                register( {
                    username: value.username,
                    email: value.email,
                    password: value.password,
                })
            }}>회원가입</Button>
        </Container>
    )
}

export default RegisterForm;