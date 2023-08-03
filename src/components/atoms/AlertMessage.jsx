import React from 'react';
import styled from "styled-components";


const AlertMessage = ({ para }) => {
    return (
        <AlertStyle>
            {para}
        </AlertStyle>
    );
};

//para 는 메세지 내용을 string 으로 받는다.
// 정규식 검사를 통한 에러메세지를 띄우는 컴포넌트

const AlertStyle = styled.p`
    color: #ff1b1b;
    font-size: 12px;
    margin-top: 0.7rem;
    height: 1rem;

    display: flex;
    text-align : start;
`

export default AlertMessage;