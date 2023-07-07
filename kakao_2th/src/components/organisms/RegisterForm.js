import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import { useEffect, useState } from "react"
import useInput from "../../hooks/useInput"
import { register } from "../../services/api"
import GNB from "../molecules/Gnb"

const RegisterForm = () => {
    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    return (
        <Container>
            <GNB showRegisterButton={false}></GNB>
            <InputGroup
                id="username"
                name="username"
                type="text"
                placeholder="사용자 이름을 입력해주세요"
                label="이름"
                value={value.username}
                onChange={handleOnChange}>
            </InputGroup>
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

            <InputGroup
                id="email"
                name="email"
                type="email"
                placeholder="이메일(아이디)를 입력해주세요"
                label="이메일"
                value={value.email}
                onChange={handleOnChange}>
            </InputGroup>

            <InputGroup
                id="password"
                name="password"
                type="password"
                placeholder="***********"
                label="비밀번호"
                value={value.password}
                onChange={handleOnChange}>
            </InputGroup>

            <InputGroup
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="***********"
                label="비밀번호 확인"
                value={value.passwordConfirm}
                onChange={handleOnChange}>
            </InputGroup>

            <Button
                onClick={() => {
                    //회원가입 요청
                    register({
                        email: value.email,
                        password: value.password,
                        username: value.username,
                    })
                }}>회원가입</Button>
            {/* 
        Props:
        - onClick: 버튼이 클릭되었을 때 실행되는 콜백 함수 (function)
      */}
        </Container>
    )
}

export default RegisterForm;