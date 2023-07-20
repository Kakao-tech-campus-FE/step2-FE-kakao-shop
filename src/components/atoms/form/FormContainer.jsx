import React from 'react';
import styled from 'styled-components';   

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0px 0px 5px rgb(199, 199, 199);
    border-radius: 5px;
    width: 420px;
    margin: 15px auto;
    padding: 15px;
`
/**
 * 입력 폼 컨테이너
 * @param {object} props 
 * @param {*} props.children - 폼 내용 
 * @returns {*}
 */
const FormContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default FormContainer;