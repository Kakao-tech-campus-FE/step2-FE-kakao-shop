import React from 'react'

function Button({
  onClick,
  children,
  disabled,
  style,
}) {
  return (
    <button style = {style} onClick={(e) => {
      e.preventDefault()
      onClick()
    }} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button