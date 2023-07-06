import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import {register} from "../../services/api";
import { useState } from "react";
import Title  from "../atoms/Title";

const RegisterForm = (props) => {
    // const { value, handleOnChange } = useInput({   username: "",   email: "",
    // password: "",   passwordCheck: "", });

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onPasswordCheckHandler = (e) => {
      setPasswordCheck(e.currentTarget.value);
    }

    return (
        <Container>
          <Title> 회원가입 </Title>
            <InputGroup
                id="username"
                type="text"
                placeholder="사용자 이름을 입력해주세요."
                label="이름"
                value={name}
                onChange={onNameHandler}
                name="username"/>
            <InputGroup
                id="email"
                type="email"
                placeholder="아이디(메일)를 입력해주세요."
                label="아이디"
                value={email}
                onChange={onEmailHandler}
                name="email"/>
            <InputGroup
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                label="비밀번호"
                value={password}
                onChange={onPasswordHandler}
                name="password"/>
            <InputGroup
                id="passwordCheck"
                type="password"
                placeholder="비밀번호를 확인해주세요."
                label="비밀번호 확인"
                value={passwordCheck}
                onChange={onPasswordCheckHandler}
                name="passwordCheck"/>
            <Button
                onClick={() => {
                    register(
                        {email: email, password: password, username: name}
                    );
                }}>
                회원가입
            </Button>
        </Container>
    );
};

export default RegisterForm;
