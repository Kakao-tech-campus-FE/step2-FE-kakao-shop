import React from 'react'
import {Link} from 'react-router-dom'

function LinkTo({children, style, to, onClick}) {
  return (
    <Link to={to} style={{textDecoration: 'none', ...style}} onClick={onClick}>{children}</Link>
  )
}

export default LinkTo

