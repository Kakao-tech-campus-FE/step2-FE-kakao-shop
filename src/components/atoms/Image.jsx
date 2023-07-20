import React from 'react'
import { styled } from 'styled-components'

const StyledPicture = styled.picture`
  width: 100%;
`

const StyledImg = styled.img`
  width: inherit;
  object-fit: cover;
`


const Image = (props) => {
  return (
    <StyledPicture>
      <StyledImg src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${props.image}`} alt={props.alt}/>
    </StyledPicture>
  )
}

export default Image