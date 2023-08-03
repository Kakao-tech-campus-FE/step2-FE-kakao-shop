import React from 'react'
import { styled } from 'styled-components'

const StyledPicture = styled.picture`
  width: 100%;
`

const StyledImg = styled.img`
  width: inherit;
  object-fit: cover;
`

const path = process.env.REACT_APP_PATH || "";
const imagePath = path !== "" ? path : process.env.REACT_APP_IMAGE;

const Image = ({image, alt}) => {
  return (
    <StyledPicture>
      <StyledImg src={`${imagePath}${image}`} alt={alt}/>
    </StyledPicture>
  )
}

export default Image