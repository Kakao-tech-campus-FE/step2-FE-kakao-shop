import React from 'react'
import { styled } from 'styled-components'

export default function Menu({children, style}) {
  return (
    <StyledMenu style={style}>{children}</StyledMenu>
  )
}

const StyledMenu = styled.div`
  position: 'relative',
`
