import React from 'react'
import { styled } from 'styled-components'

function Warning( { children, style}) {
  return (
    <Warn style={style}>{children}</Warn>
  )
}

export default Warning

const Warn = styled.div`
  color: red;
  font-weight: bold;
`