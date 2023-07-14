import React from "react";
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import { login } from "../../services/api";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../store/userSlice";
import runLogoutTimer from "../../utils/auth";

const LoginForm = ({
    className, // class
}) => {
    const LoginError = {
        "이메일 형식으로 작성해주세요:email": "이메일 형식으로 작성해주세요.",
        "영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.:password":
            "비밀번호는 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.",
        "8에서 20자 이내여야 합니다.:password":
            "비밀번호는 8에서 20자 이내여야 합니다.",
        "인증되지 않았습니다": "존재하지 않는 아이디/비밀번호 입니다.",
    };

    const [value, handleOnChange] = useInput({
        email: "",
        password: "",
    });

    const [errorMsg, setErrorMsg] = React.useState("");

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <Container
            className={`d-flex flex-column align-items-center p-5 border mx-auto ${className}`}
            style={{ width: "580px" }}
        >
            <InputGroup
                id="email"
                name="email"
                type="email"
                value={value.email ? value.email : ""}
                onChange={handleOnChange}
                placeholder="카카오메일 아이디, 이메일, 전화번호"
                className="w-100"
            />
            <InputGroup
                id="password"
                name="password"
                type="password"
                value={value.password ? value.password : ""}
                onChange={handleOnChange}
                placeholder="비밀번호"
                className="w-100"
            />
            {errorMsg === "" ? (
                ""
            ) : (
                <Box
                    className="w-100 mb-3 p-3 text-danger text-start border-0"
                    style={{
                        fontSize: "0.8rem",
                        backgroundColor: "rgb(250,250,250)",
                    }}
                >
                    <Label>{errorMsg}</Label>
                </Box>
            )}
            <Button
                className={"w-100 py-2 border-0"}
                style={{ backgroundColor: "rgb(254,229,0)" }}
                onClick={async function () {
                    const loginCheck = await login({
                        email: value.email,
                        password: value.password,
                    })
                        .then((response) => response.data)
                        .catch((response) => response.data);
                    if (loginCheck.success) {
                        navigate("/");
                        dispatch(
                            userLogin({
                                email: value.email,
                                time: new Date().toString(),
                            })
                        );
                        runLogoutTimer(dispatch, 1000 * 3600 * 24); // 하루 후 로그아웃
                    } else {
                        setErrorMsg(LoginError[loginCheck.error.message]);
                    }
                }}
            >
                로그인
            </Button>
            <Link
                to="/signup"
                className={
                    "w-100 text-start text-body text-decoration-none mt-3"
                }
                style={{ fontSize: "0.7rem" }}
            >
                회원가입
            </Link>
        </Container>
    );
};

export default LoginForm;
