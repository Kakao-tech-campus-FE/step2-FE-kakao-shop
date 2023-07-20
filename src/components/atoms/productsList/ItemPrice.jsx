import React from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  height: 1.4rem;
  width: 60%;
`

const ItemPrice = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default ItemPrice