import React from 'react'
import {Link} from 'react-router-dom'

function Card({ to, children,  }) {
  return (
    <Link style={{
      display: 'inline-block',
      textDecoration: "none",
      color: "black",
      marginBottom: "50px",
      marginRight: "40px",
    }}to={to}>
      {children}
    </Link>
  )
}

export default Card

