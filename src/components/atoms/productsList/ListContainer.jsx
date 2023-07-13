import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
`

const ListContainer = (props) => {
  return (
    <Container>{props.children}</Container>
  )
}

export default ListContainer