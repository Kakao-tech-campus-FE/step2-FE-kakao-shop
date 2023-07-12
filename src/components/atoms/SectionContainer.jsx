import React from 'react';
import styled from 'styled-components';   

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`

/**
 * section 태그에 flex 를 기본으로 지정한 컴포넌트
 * @param {*} props
 * @param {*} props.children - section 태그 속 내용
 * @returns {*}
 */
const SectionContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default SectionContainer;