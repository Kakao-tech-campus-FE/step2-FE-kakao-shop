import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import {login} from "../../services/api";
import {reducerLogin, setEmail} from "../../store/userSlice";
import {useDispatch} from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [value, handleOnChange] = useInput({
        email: "",
        password: "",
    });

    const loginReq = () => {
        console.log(value)
        login({
                email: value.email,
                password: value.password
            }
        ).then(res => {
                console.log(res);
                dispatch(setEmail(
                    res.data.email
                ));
                dispatch(reducerLogin());
            }
        ).catch(err => {
                console.log(err);
            }
        );
    };

    return (
        <Container className={`login-form`}>
            <InputGroup
                id="email"
                type="text"
                value={value.email}
                label="이메일 (아이디)"
                placeholder="이메일"
                onChange={handleOnChange}
            />
            <InputGroup
                id="password"
                type="password"
                value={value.password}
                label="비밀번호"
                placeholder="비밀번호"
                onChange={handleOnChange}
            />
            <Button
                className="login-button"
                onClick={() => {
                    loginReq();
                }}>
                로그인
            </Button>
        </Container>
    );
}

export default LoginForm;