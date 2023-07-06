import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { login } from "../../services/api";
import { useState } from "react";
import Title  from "../atoms/Title";

const LoginForm = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    return (
        <Container>
          <Title> 로그인 </Title>
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
   
            <Button
                onClick={() => {
                    login(
                        {email: email, password: password}
                    );
                }}>
                로그인
            </Button>
        </Container>
    );
};

export default LoginForm;
