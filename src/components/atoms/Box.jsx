import React from 'react'
import {styled} from 'styled-components'

function Box({
  children,
  style,
}) {
  return (
    <div style={style}>{children}</div>
  )
}

export default Box

