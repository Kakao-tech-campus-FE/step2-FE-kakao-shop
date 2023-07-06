import React from 'react'
import {styled} from 'styled-components'

function Box({
  children,

}) {
  return (
    <BoxDiv>{children}</BoxDiv>
  )
}

export default Box

const BoxDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`