import React from 'react'
import {Link} from 'react-router-dom'

function Card({ to, children }) {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default Card