import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import useInput from "../../hooks/useInput";

const RegisterForm = ({
    className, // class
}) => {
    const { value, handelOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    return (
        <Container
            className={`d-flex flex-column align-items-center p-3 border border-primary border-3 rounded ${className}`}
        >
            <Label className="fs-1">회원가입</Label>
            <InputGroup
                id="username"
                type="text"
                label="이름"
                placeholder="이름을 입력해주세요."
                className="w-100"
            />
            <InputGroup
                id="email"
                type="email"
                label="이메일"
                placeholder="이메일을 입력해주세요."
                className="w-100"
            />
            <InputGroup
                id="password"
                type="password"
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요. (문자, 숫자, 특수문자 포함 8~20자)"
                className="w-100"
            />
            <InputGroup
                id="passwordConfirm"
                type="password"
                label="비밀번호 확인"
                placeholder="비밀번호를 재입력해주세요."
                className="w-100"
            />
            <Button
                className={"rounded mt-4 mx-auto bg-primary text-white fs-4"}
            >
                회원가입
            </Button>
        </Container>
    );
};

export default RegisterForm;
