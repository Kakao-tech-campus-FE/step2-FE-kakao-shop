import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 180px;
  height: 300px;
  padding: 5px;
  cursor: pointer;
`

const ItemContainer = ( props ) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default ItemContainer