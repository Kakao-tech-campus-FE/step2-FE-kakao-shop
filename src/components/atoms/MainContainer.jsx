import React from 'react';
import styled from 'styled-components';   

const Container = styled.main`
    display: flex;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1200px;
`

/**
 * section 태그에 flex 를 기본으로 지정한 컴포넌트
 * @param {*} props
 * @param {*} props.children - section 태그 속 내용
 * @returns {*}
 */
const MainContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default MainContainer;