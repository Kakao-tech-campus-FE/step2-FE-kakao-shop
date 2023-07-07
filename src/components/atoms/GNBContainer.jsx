import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  background-color: white;
  margin-bottom: 20px;
`

const GNBContainer = (props) => {
  return (
      <Box>{props.children}</Box>
  )
}

export default GNBContainer