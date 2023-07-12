import React from 'react'
import SubmitButton from "../../atoms/SubmitButton"
import { styled } from 'styled-components';

const ErrorMessage = styled.div`
  text-align: center;
`

/**
 * 제출 버튼 + 하단 안내메세지
 * @param {Object} props 
 * @param {boolean} props.disabled - 버튼 비활성화 여부
 * @param {function} props.onClick - 버튼 클릭시 실행 함수
 * @param {Object} props.children - 버튼 내용
 * @param {Object} props.message  - 버튼 하단 안내메세지 (제출 오류 시)
 * @returns {*}
 */
const SubmitGroup = (props) => {
  return (
    <>
      <SubmitButton type="submit"
            disabled={props.disabled} 
            onClick={props.onClick}>
        {props.children}
      </SubmitButton>
      <ErrorMessage>{props.message}</ErrorMessage>
    </>
  )
}

export default SubmitGroup