import React from 'react'
import { styled } from 'styled-components'

function Containor({
  children,
  style,
  className,
}) {
  return (
    <ContainovrDiv style={style}>{children}</ContainovrDiv>
  )
}

export default Containor

const ContainovrDiv = styled.div`
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`