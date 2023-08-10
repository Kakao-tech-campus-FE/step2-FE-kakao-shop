import React from 'react'
import { styled } from 'styled-components'

function Li({children, style}) {
  return (
    <Lis style={style}>{children}</Lis>
  )
}

export default Li

const Lis = styled.li`
  list-style: none;
`