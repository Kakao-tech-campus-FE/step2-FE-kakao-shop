import React from 'react'

function Button({
  onClick,
  children,
  disabled,
  style,
  disable,
}) {
  return (
    <button style = {style} onClick={(e) => {
      e.preventDefault()
      onClick()
    }} disable={disable}>
      {children}
    </button>
  )
}

export default Button