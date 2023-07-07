import React from 'react';
import styled from 'styled-components';

const QuestionStyle = styled.div`
    display: flex;
    color: #929292;
    font-size: 15px;
`
const QuestionBtnStyle = styled.div`
    color: #e4b827;
    font-size: 15px;
    margin-left: 1rem;
    margin-bottom: 5rem;
`

const Question = ({ para, children, onClick }) => {
    return (
        <QuestionStyle>
            {para}
            <QuestionBtnStyle onClick={onClick}>{children}</QuestionBtnStyle>
        </QuestionStyle>
    );
};

export default Question;