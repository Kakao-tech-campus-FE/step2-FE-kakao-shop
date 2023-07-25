import React from 'react'
import { styled } from 'styled-components'

const Box = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  background-color: white;
  margin-bottom: 30px;
`

/**
 * GNB 전체를 감싸는 컨테이너
 * @param {Object} props
 * @param {*} props.children - 내용 (InnerBox)
 * @returns {*}
 */
const GNBContainer = (props) => {
  return (
      <Box>{props.children}</Box>
  )
}

export default GNBContainer