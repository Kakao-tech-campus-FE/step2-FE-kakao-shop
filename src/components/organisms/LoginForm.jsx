import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import {useEffect, useState} from "react";
import useInput from "../../hooks/useInput";
import Title from "../Atoms/Title";
import {setEmail} from "../../store/slices/userSlice";

const LoginForm = ({onSubmit, onChange, form}) => {
    const {value, handleOnChange} = useInput({
        email: "",
        password: "",
    });

    const loginReq = () => {
        login({
            email: value.email,
            password: value.password,
        }).then((res) => {
            console.log(res);
            dispatch(
                setEmail({email: value.email,}
                )
            )
        })
            .catch((err) => {
                    console.log(err);
                }
            )

    }


    useEffect(() => {

    }, [value.email, value.password])

    return (
        <Container>
            <Title>로그인</Title>
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
            <Button onClick={(e) => {
                e.preventDefault();
                register({
                    email: value.email,
                    password: value.password,
                })
            }}>로그인</Button>
        </Container>
    )
}

export default LoginForm;