import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 7px;
`

/**
 * GNB에서 컴포넌트들이 위치하는 범위의 박스
 * @param {Object} props
 * @param {*} props.children - 메뉴 또는 메뉴 모음 박스 컴포넌트
 * @returns {*}
 */
const GNBInnerBox = (props) => {
  return (
      <Box>{props.children}</Box>
  )
}

export default GNBInnerBox