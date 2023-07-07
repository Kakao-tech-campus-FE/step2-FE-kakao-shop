import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
`

const GNBMyGroup = (props) => {
  return (
      <Container>
        {props.children}
      </Container>
  )
}

export default GNBMyGroup