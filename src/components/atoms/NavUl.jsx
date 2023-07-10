import React from 'react'
import { styled } from 'styled-components'

function NavUl({children, style}) {
  return (
    <Ul_ style={style}>{children}</Ul_>
  )
}

export default NavUl

const Ul_ = styled.ul`
  list-style:none;
  &::after{
    display: block;
    clear: both;
    content: "";
  }
`