import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import { register } from "../../apis/api";

const RegisterForm = () => {
    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    return (
        <Container>
            <InputGroup id="username" type="text" name="username" placeholder="사용자 이름" label="이름" value={value.username}
                onChange={handleOnChange}/>
            <InputGroup id="email" type="email" name="email" placeholder="이메일(아이디)" label="이메일" value={value.email}
                onChange={handleOnChange}/>
            <InputGroup id="password" type="password" name="password" placeholder="비밀번호" label="비밀번호" value={value.password}
                onChange={handleOnChange}/>
            <InputGroup id="passwordConfirm" type="password" name="passwordConfirm" placeholder="비밀번호 확인" label="비밀번호 확인" value={value.passwordConfirm}
                onChange={handleOnChange}/>
            <Button
                onClick={() => {
                    // api 회원 가입 요청
                    register({
                        email: value.email,
                        password: value.password,
                        username: value.username,
                    })
                }}
            >회원가입</Button>
        </Container>
    );
}

export default RegisterForm;