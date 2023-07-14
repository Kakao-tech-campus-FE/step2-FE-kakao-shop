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
//로그인에서는 회원가입 폼으로, 회원가입 페이지에서는 로그인 폼으로 이동하는 버튼
//para 에는 스트링값이 들어가고, onClick 시 이동하는 함수가 들어간다..
export default Question;