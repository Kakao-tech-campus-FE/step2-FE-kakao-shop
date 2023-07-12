import React from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
    text-decoration: none;
    height: 4rem;
`

const ItemTitle = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default ItemTitle