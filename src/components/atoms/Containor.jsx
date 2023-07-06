import React from 'react'
import { styled } from 'styled-components'

function Containor({
  children,
}) {
  return (
    <ContainovrDiv>{children}</ContainovrDiv>
  )
}

export default Containor

const ContainovrDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`