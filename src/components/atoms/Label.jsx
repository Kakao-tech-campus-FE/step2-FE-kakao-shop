import React from 'react'

function Label({
  children,
  htmlFor,
}) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label