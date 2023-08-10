import React from 'react'
import { styled } from 'styled-components'

function Image({ src, style, alt }) {

  return (
    <img src={ src } style={style} alt={alt} />
  )
}

export default Image
