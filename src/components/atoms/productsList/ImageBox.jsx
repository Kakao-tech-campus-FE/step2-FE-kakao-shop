import React from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
    width: 100%;
    text-decoration: none;
    aspect-ratio: 1/1;
`

const ImageBox = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default ImageBox