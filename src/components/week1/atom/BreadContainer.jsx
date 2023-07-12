import React from 'react'
import styled from 'styled-components';   

const Container = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 20px;
`

const BreadContainer = (props) => {
  return (
    <Container>{props.children}
    </Container>
  )
}

export default BreadContainer