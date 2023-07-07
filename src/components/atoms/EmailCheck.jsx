import React from 'react';
import styled from 'styled-components';   

const CheckBtn = styled.button`
    height: 30px;
    background-color: yellow;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-family: Pretendard;
    margin: 0 20px 10px auto;
`

const EmailCheck = ({ children, onClick, style }) => {
    return (
        <CheckBtn onClick={onClick} style={style}>{children}
        </CheckBtn>
    );
};

export default EmailCheck;