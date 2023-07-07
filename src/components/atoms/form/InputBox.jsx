import React from 'react';
import styled from 'styled-components';   

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding: 10px 20px;
`

// input 박스 + 라벨 1세트를 감싸는 투명 박스

const InputBox = (props) => {
    return (
        <Box>{props.children}</Box>
    );
};

export default InputBox;