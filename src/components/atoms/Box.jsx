import React from 'react';
import styled from 'styled-components';   

const BoxStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding: 10px 20px;
`

// input 박스 + 라벨 1세트를 감싸는 투명 박스

const Box = ( { children} ) => {
    return (
        <BoxStyle>{children}</BoxStyle>
    );
};

export default Box;