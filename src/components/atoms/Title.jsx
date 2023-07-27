import React from 'react'

function Title( {children, style, className}) {
  return (
    <h3 style={style} className={className}>{children}</h3>
  )
}

export default Title