import React from 'react';
import styled from 'styled-components';   

const BoxStyle = styled.div`
    display: flex;
`

/**
 * input 하단 안내메세지 컴포넌트를 감싸는 박스 컴포넌트
 * @param {Object} props
 * @param {*} props.children - 안내메세지 컴포넌트
 * @returns {*}
 */
const FormatCheckBox = (props) => {
    return (
        <BoxStyle>{props.children}</BoxStyle>
    );
};

export default FormatCheckBox;