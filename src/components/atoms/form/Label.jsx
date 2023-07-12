import React from 'react';
import styled from 'styled-components';  

const LabelStyle = styled.label`
    min-width: 120px;
`

/**
 * 라벨 컴포넌트
 * @param {Object} props 
 * @param {string} props.htmlFor - 연결할 input 요소의 id
 * @param {string} props.className - 라벨 요소의 class
 * @param {*} props.children - 라벨 내용
 * @returns {*}
 */

const Label = ( props ) => {
    return (
        <LabelStyle 
            htmlFor={props.htmlFor}
            className={props.className}>
        {props.children}
        </LabelStyle>
    );
};

  export default Label;