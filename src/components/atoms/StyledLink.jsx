import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Styled = styled(Link)`
    text-decoration: none;
    color: black;
`

const StyledLink = (props) => {
  return (
    <Styled to={props.to}>{props.children}</Styled>
  )
}

export default StyledLink