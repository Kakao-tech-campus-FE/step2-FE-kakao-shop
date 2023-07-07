import React from 'react';
import styled from "styled-components";

const AlertStyle = styled.p`
    color: #ff1b1b;
    font-size: 12px;
    margin-top: 0.7rem;
    height: 1rem;

    display: flex;
    text-align : start;
`


const AlertMessage = ({ para }) => {
    return (
        <AlertStyle>
            {para}
        </AlertStyle>
    );
};

export default AlertMessage;