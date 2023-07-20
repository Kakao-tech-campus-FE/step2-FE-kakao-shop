import React from 'react'

function Label({
  children,
  htmlFor,
  style
}) {
  return (
    <label htmlFor={htmlFor} style={style}>
      {children}
    </label>
  )
}

export default Label;