import React from 'react';
import styled from 'styled-components';  

const StyledButton = styled.button`
  height: 40px;
  border-radius: 10px;
  border: none;
  text-align: center;
  margin: 10px 0;
  font-family: Pretendard;
  cursor: pointer;
`

/**
 * 제출 버튼 컴포넌트
 * @param {object} props  
 * @param {boolean} props.disabled - 버튼 비활성화 여부
 * @param {function} props.onClick - 버튼 클릭시 실행되는 함수
 * @param {*} props.children - 버튼 내용
 * @returns {*}
 */
const SubmitButton = (props) => {
  return (
      <StyledButton
        id={props.id}
        type="submit"
        disabled={props.disabled} 
        style={{backgroundColor: props.disabled ? "lightgray" : "yellow"}}
        onClick={props.onClick}
        >
        {props.children}
      </StyledButton>
  );
};

  export default SubmitButton;