import React from 'react';
import styled from 'styled-components';  

const BtnStyle = styled.button`
    height: 30px;
    background-color: yellow;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-family: Pretendard;
    margin: 10px;
`

  const Button = ({id, onClick, children}) => {
    return (
        <BtnStyle id={id} onClick={onClick}>{children}</BtnStyle>
    );
};

  export default Button;