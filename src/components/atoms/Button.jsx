import styled from "styled-components";

const StyledButton = styled.button`
    border: 0;
    cursor: pointer;
    display: block;
    width: 100%;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 51px;
    background-color: #fee500;
`;

// onClick : button의 submit 대신 사용할 click 이벤트 핸들러
// children : button의 내용으로 사용할 요소
const Button = ({ onClick, children }) => {
    return (
        <StyledButton 
            onClick={(e) => {
                e.preventDefault(); // submit 방지
                onClick();
            }}
        >{children}</StyledButton>
    )
}

export default Button;