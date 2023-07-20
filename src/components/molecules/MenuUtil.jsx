import React from 'react'

function MenuUtil({children, menustyle}) {
  return (
    <div style={menustyle}>{children}</div>
  )
}

export default MenuUtil