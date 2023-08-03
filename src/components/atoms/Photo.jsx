import React from 'react'
import { styled } from 'styled-components'

const staticServerUri = process.env.REACT_APP_PATH || "";

function Photo({ src, alt, size }) {

  src = `${staticServerUri}/src/assets/img/products`+`${src}`
  return (
    <Picture size={size}>
      <source srcSet={staticServerUri + src}/>
      <img src={staticServerUri + src} alt={alt}/>
    </Picture>
  )
}

export default Photo

const Picture = styled.picture`
  display: block;
  width: ${(props)=>{return props.size}};
  > img{
    width: inherit
  }
`