import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import useInput from "../../hooks/useInput";

const LoginForm = ({
    className, // class
}) => {
    const { value, handelOnChange } = useInput({
        email: "",
        password: "",
    });

    return (
        <Container
            className={`d-flex flex-column align-items-center p-3 border border-primary border-3 rounded ${className}`}
        >
            <Label className="fs-1">로그인</Label>
            <InputGroup
                id="email"
                type="email"
                label="아이디"
                placeholder="이메일 (아이디)"
                className="w-100"
            />
            <InputGroup
                id="password"
                type="password"
                label="비밀번호"
                placeholder="비밀번호"
                className="w-100"
            />
            <Button
                className={"rounded mt-4 mx-auto bg-primary text-white fs-4"}
            >
                로그인
            </Button>
        </Container>
    );
};

export default LoginForm;
