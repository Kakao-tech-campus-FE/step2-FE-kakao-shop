import styled from "styled-components";

const Btn = styled.button`
    width: 26rem;
    height: 3rem;

    margin-top: 1rem;
    margin-bottom: 3rem;
    border: 0;

    background-color: #5c4910;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
    font-size: 16px;

`
//회원가입,로그인 폼을 제출하는 버튼.
//onClick 프롭은 클릭 이벤트 발생 시 실행할 함수를 받는다.
const Button = ({ onClick, children }) => {
    return (
        <Btn onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>
            {children}
        </Btn>
    )
}

export default Button;