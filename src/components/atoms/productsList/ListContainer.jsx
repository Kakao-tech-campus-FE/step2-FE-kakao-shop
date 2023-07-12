import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 10px;
  justify-content: center;
`

const ListContainer = (props) => {
  return (
    <Container>{props.children}</Container>
  )
}

export default ListContainer