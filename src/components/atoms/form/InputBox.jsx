import React from 'react';
import styled from 'styled-components';   

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: stretch;
    padding: 5px 20px;
`

/**
 * input + 라벨 1세트를 감싸는 박스
 * @param {*} props
 * @param {*} props.children - 박스 내용 (input + 라벨 1세트)
 * @returns {*}
 */
const InputBox = (props) => {
    return (
        <Box>{props.children}</Box>
    );
};

export default InputBox;