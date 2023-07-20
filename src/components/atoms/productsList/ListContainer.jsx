import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width:768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ListContainer = (props) => {
  return (
    <Container>{props.children}</Container>
  )
}

export default ListContainer