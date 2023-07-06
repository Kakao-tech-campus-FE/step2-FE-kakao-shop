import React from 'react';
import styled from 'styled-components';   

const BoxStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    border-top: 1px solid black;
    padding: 10px 20px;
`

const Box = ({ children, style}) => {
    return (
        <BoxStyle style={ style }>{children}
        </BoxStyle>
    );
};

export default Box;