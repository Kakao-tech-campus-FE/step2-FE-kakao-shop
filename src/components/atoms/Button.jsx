import styled from "styled-components";

const StyledButton = styled.button`
    border: 0;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 51px;
    background-color: #fee500;
`;

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