import React from 'react'
import { styled } from 'styled-components'

const StyledDiv = styled.div`
    display: grid;
    width: 66%;
    /* min-width: 800px; */
    grid-template-columns: 1fr 1fr ;
`

const DetailContainer = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default DetailContainer