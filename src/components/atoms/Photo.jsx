import React from 'react'
import { styled } from 'styled-components'

function Photo({ src, alt }) {
  src = process.env.REACT_APP_API_URL + src
  return (
    <Picture>
      <source srcSet={src}/>
      <img src={src} alt={alt}/>
    </Picture>
  )
}

export default Photo

const Picture = styled.picture`
  display: block;
  width: 284px;

  > img{
    width: inherit
  }
`