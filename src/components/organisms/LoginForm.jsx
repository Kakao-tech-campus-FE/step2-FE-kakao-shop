import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import {useEffect} from "react";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
const LoginForm = ({onSubmit, onChange, form}) => {
    const {value, handleOnChange} = useInput({
        email: "",
        password: "",
    });

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
            }}>로그인</Button>
        </Container>
    )
}

export default LoginForm;