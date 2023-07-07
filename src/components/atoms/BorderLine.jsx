import React from 'react'

function BorderLine( {style, children} ) {
  return (
    <div style={{borderTop: '1px solid #444', margin: '30px 0px',...style}}>{children}</div>
  )
}

export default BorderLine