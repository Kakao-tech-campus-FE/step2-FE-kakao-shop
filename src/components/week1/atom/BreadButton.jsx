import React from 'react'
import styled from 'styled-components';   
import { Link } from "react-router-dom";

const Box = styled(Link)`
  text-decoration: none; 
  color: black;
`
const Text = styled.span`
  margin: 5px;
`

const BreadButton = (props) => {
  return (
    <>
      <Box>
        <Text>{props.children}</Text>
      </Box>
    </>
    
  )
}

export default BreadButton