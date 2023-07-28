import React from "react";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import useStates from "../../hooks/useStates";
import { useNavigate } from "react-router-dom";
import { emailValid, register } from "../../services/api";

const RegisterForm = ({
    className, // class
}) => {
    const [value, handleOnChange] = useInput({
        username: null,
        email: null,
        password: null,
        passwordConfirm: null,
    });

    const [description, setDescription] = useStates({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const [valid, setValid] = useStates({
        username: false,
        email: false,
        password: false,
        passwordConfirm: false,
    });
    const navigate = useNavigate();

    // Validation
    React.useEffect(() => {
        const text = value.username;
        if (text != null) {
            if (text.length < 1) {
                setValid({ ["username"]: false });
                setDescription({ ["username"]: "필수 항목 입니다." });
            } else {
                setValid({ ["username"]: true });
                setDescription({ ["username"]: "사용 가능합니다." });
            }
        }
    }, [value.username]);

    React.useEffect(() => {
        const text = value.email;
        if (text != null) {
            if (text.length < 1) {
                setValid({ ["email"]: false });
                setDescription({ ["email"]: "필수 항목 입니다." });
            }
        }
    }, [value.email]);

    React.useEffect(() => {
        const text = value.password;
        const re = new RegExp(
            "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$"
        );
        if (text != null) {
            if (text.length < 1) {
                setValid({ ["password"]: false });
                setDescription({ ["password"]: "필수 항목 입니다." });
            } else if (re.test(text)) {
                setValid({ ["password"]: true });
                setDescription({ ["password"]: "사용 가능합니다." });
            } else {
                setValid({ ["password"]: false });
                setDescription({
                    ["password"]:
                        "영어, 숫자, 특수기호를 포함한 8~20자여야 합니다.",
                });
            }
        }
    }, [value.password]);

    React.useEffect(() => {
        const text = value.passwordConfirm;
        if (text != null) {
            if (text.length < 1) {
                setValid({ ["passwordConfirm"]: false });
                setDescription({ ["passwordConfirm"]: "필수 항목 입니다." });
            } else if (text === value.password) {
                setValid({ ["passwordConfirm"]: true });
                setDescription({ ["passwordConfirm"]: "일치 합니다." });
            } else {
                setValid({ ["passwordConfirm"]: false });
                setDescription({ ["passwordConfirm"]: "일치하지 않습니다." });
            }
        }
    }, [value.passwordConfirm]);

    return (
        <Container
            className={`d-flex flex-column align-items-center p-5 border text-start w-75 mx-auto ${className}`}
        >
            <Container className="w-100 d-flex flex-row p-0">
                <InputGroup
                    id="email"
                    name="email"
                    type="email"
                    label="이메일"
                    valid={valid.email}
                    value={value.email ? value.email : ""}
                    description={description.email}
                    placeholder="이메일을 입력해주세요."
                    className={`w-100`}
                    onChange={handleOnChange}
                />
                <Button
                    className="flex-shrink-0 flex-grow-0 align-self-center px-3 py-2 bg-kakao"
                    onClick={async function () {
                        const emailCheck = await emailValid({
                            email: value.email,
                        })
                            .then((response) => response.data)
                            .catch((response) => response.data);
                        console.log(emailCheck);
                        if (emailCheck?.success === true) {
                            setValid({ ["email"]: true });
                            setDescription({ ["email"]: "사용 가능합니다." });
                        } else {
                            setValid({ ["email"]: false });
                            setDescription({
                                ["email"]: emailCheck?.error.message,
                            });
                        }
                    }}
                >
                    검사
                </Button>
            </Container>
            <InputGroup
                id="username"
                name="username"
                type="text"
                label="이름"
                valid={valid.username}
                value={value.username ? value.username : ""}
                description={description.username}
                placeholder="이름을 입력해주세요."
                className="w-100"
                onChange={(e) => {
                    handleOnChange(e);
                }}
            />
            <InputGroup
                id="password"
                name="password"
                type="password"
                label="비밀번호"
                valid={valid.password}
                value={value.password ? value.password : ""}
                description={description.password}
                placeholder="비밀번호를 입력해주세요. (영어, 숫자, 특수기호를 포함한 8~20자)"
                className="w-100"
                onChange={handleOnChange}
            />
            <InputGroup
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                label="비밀번호 확인"
                valid={valid.passwordConfirm}
                value={value.passwordConfirm ? value.passwordConfirm : ""}
                description={description.passwordConfirm}
                placeholder="비밀번호를 재입력해주세요."
                className="w-100"
                onChange={handleOnChange}
            />
            <Button
                className={"w-100 mt-2 py-2 border-0 bg-kakao"}
                onClick={async function () {
                    if (
                        valid.username &&
                        valid.email &&
                        valid.password &&
                        valid.passwordConfirm
                    ) {
                        const registerCheck = await register({
                            email: value.email,
                            password: value.password,
                            username: value.username,
                        }).then((response) => response.data);
                        if (registerCheck.success) navigate("/");
                    } else {
                        let newDescriptions = {};
                        for (let k in valid) {
                            if (!valid[k]) {
                                Object.assign(newDescriptions, {
                                    [k]: "사용 불가능합니다.",
                                });
                            }
                        }
                        setDescription(newDescriptions);
                    }
                }}
            >
                회원가입
            </Button>
        </Container>
    );
};

export default RegisterForm;
