import React from 'react'
import { styled } from 'styled-components'

function NavUl({children, style}) {
  return (
    <Ul style={style}>{children}</Ul>
  )
}

export default NavUl

const Ul = styled.ul`
  list-style:none;
  &::after{
    display: block;
    clear: both;
    content: "";
  }
`