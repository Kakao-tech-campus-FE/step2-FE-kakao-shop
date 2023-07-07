import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-right: auto;
`

const GNBMainGroup = (props) => {
  return (
      <Container>
        {props.children}
      </Container>
  )
}

export default GNBMainGroup