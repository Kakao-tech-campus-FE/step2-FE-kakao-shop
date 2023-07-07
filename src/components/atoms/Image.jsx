import React from 'react'
import { styled } from 'styled-components'

function Image({ src, style }) {

  return (
    <img src={ src } style={style} />
  )
}

export default Image
