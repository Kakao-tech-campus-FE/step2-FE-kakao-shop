import React from 'react'
import { styled } from 'styled-components'

function Li({children, style}) {
  return (
    <Li_ style={style}>{children}</Li_>
  )
}

export default Li

const Li_ = styled.li`
  list-style: none;
`