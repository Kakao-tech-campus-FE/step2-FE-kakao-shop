import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 95%;
  max-width: 320px;
  padding: 10px 5px 40PX 5PX;
  cursor: pointer;
`

const CardContainer = ( props ) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default CardContainer