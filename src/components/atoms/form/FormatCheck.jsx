import React from 'react';
import styled from 'styled-components';   

const Text = styled.div`
    margin: 0 0 10px 143px;
    font-size: 0.8rem;
`

/**
 * input 하단 안내메세지 컴포넌트
 * @param {Object} props
 * @param {Object} props.style - 텍스트 스타일 객체 
 * @param {*} props.children - 안내메세지 텍스트
 * @returns {*} 
 */
const FormatCheck = (props) => {
    return (
        <Text style={props.style}>{props.children}</Text>
    );
};

export default FormatCheck;