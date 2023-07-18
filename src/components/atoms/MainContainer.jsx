import React from 'react';
import styled from 'styled-components';   

const Container = styled.main`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: ${props => props.column ? 'center' : null};
    margin: 0 auto;
    max-width: 1200px;
`

/**
 * section 태그에 flex 를 기본으로 지정한 컴포넌트
 * @param {*} props
 * @param {*} props.children - section 태그 속 내용
 * @param {boolean} props.column - flex 정렬 방향 설정 (미설정시 row)
 * @returns {*}
 */
const MainContainer = (props) => {
    return (
        <Container column={props.column}>{props.children}</Container>
    );
};

export default MainContainer;