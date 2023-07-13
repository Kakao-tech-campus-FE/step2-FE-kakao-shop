import React from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    text-decoration: none;
    height: 4rem;
    margin: 5px 0;
`

const ItemTitle = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default ItemTitle