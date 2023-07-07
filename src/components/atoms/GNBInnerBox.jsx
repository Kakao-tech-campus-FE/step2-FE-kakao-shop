import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`

const GNBInnerBox = (props) => {
  return (
      <Box>{props.children}</Box>
  )
}

export default GNBInnerBox