import React from 'react';
import styled from 'styled-components';   

const CheckBtn = styled.button`
    width: 30px;
`

const EmailCheck = ({ children, onClick }) => {
    return (
        <CheckBtn onClick={onClick}>{children}
        </CheckBtn>
    );
};

export default EmailCheck;