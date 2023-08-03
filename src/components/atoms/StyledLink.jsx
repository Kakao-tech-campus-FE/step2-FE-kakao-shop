import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Styled = styled(Link)`
    text-decoration: none;
    color: black;
`

const url = process.env.REACT_APP_PATH || "";

const StyledLink = (to, children) => {
  return (
    <Styled to={url + to}>{children}</Styled>
  )
}

export default StyledLink