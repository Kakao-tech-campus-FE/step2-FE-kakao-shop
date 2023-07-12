import React from 'react';
import styled from 'styled-components';  

const InputStyle = styled.input`
  flex-grow: 1;
  height: 30px;
`

/**
 * input 입력 컴포넌트
 * @param {*} props 
 * @param {string} props.id - input 요소의 id 
 * @param {string} props.type  - input 요소의 type (text, password, email)
 * @param {string} props.placeholder  - input 요소의 placeholder 
 * @param {function} props.onChange - input 요소 값 변경시 실행될 함수  
 * @returns {*}
 */

const Input = ( props ) => {
  return (
      <InputStyle 
        id={props.id}
        type={props.type} 
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
  );
};

  export default Input;