import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`

/**
 * GNB의 각 메뉴버튼 컴포넌트
 * @param {*} props 
 * @param {function} props.onClick - 버튼 클릭시 실행 함수
 * @param {*} props.children - 버튼 내용
 * @returns 
 */
const GNBButton = (props) => {
  return (
      <Box onClick={props.onClick}>{props.children}</Box>
  )
}

export default GNBButton