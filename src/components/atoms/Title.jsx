import React from 'react'

function Title( {children, style }) {
  return (
    <h3 style={style}>{children}</h3>
  )
}

export default Title