import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import Title from "../atoms/Title"
import useInput from "../../hooks/useInput"
import { login } from "../../services"
import { useDispatch, useSelector } from "react-redux"
import { loginRequest, setEmail } from "../../store/slices/userSlice"
import GNB from "../molecules/Gnb"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email)
    const navigate = useNavigate();

    const { value, handleOnChange } = useInput({
        email: "",
        password: "",
    })

    const handleLogin = () => {
        dispatch(
            loginRequest({
                email: value.email,
                password: value.password,
            })
        );

        // 로그인 성공 시 홈페이지로 이동
        navigate("/home");
    };

    return (
        <Container>
            <GNB showRegisterButton={true}></GNB>
            <Title>
                로그인
            </Title>
            {/*
        Title 컴포넌트는 주어진 텍스트를 표시하는 역할을 수행합니다.
        자식 컴포넌트를 감싸기 위한 컨테이너 역할을 합니다.
        Props:
        - children: 표시할 텍스트 (string)
      */}
            <span>{email}</span>
            {/*
        email 변수를 출력하기 위해 span 요소를 사용합니다.
      */}
            <InputGroup id="email" name="email" type="email" placeholder="이메일(아이디)를 입력해주세요" label="이메일"
                value={value.email}
                onChange={handleOnChange}></InputGroup>
            {/*
        Props:
        - id: Input 요소의 ID (string)
        - name: Input 요소의 name (string)
        - type: Input 요소의 타입 (string)
        - placeholder: Input 필드에 표시되는 안내 텍스트 (string)
        - label: Input 필드 옆에 표시되는 라벨 텍스트 (string)
        - value: Input 필드의 현재 값 (string)
        - onChange: Input 값이 변경될 때 실행되는 콜백 함수 (function)
      */}
            <InputGroup id="password" name="password" type="password" placeholder="***********" label="비밀번호"
                value={value.password}
                onChange={handleOnChange}></InputGroup>
            <Button
                onClick={() => {
                    dispatch(
                        loginRequest({
                            email: value.email,
                            password: value.password,
                        })
                    )
                }}>로그인</Button>
            {/*
        Props:
        - onClick: 버튼이 클릭되었을 때 실행되는 콜백 함수 (function)
      */}
        </Container>
    )
}

export default LoginForm;