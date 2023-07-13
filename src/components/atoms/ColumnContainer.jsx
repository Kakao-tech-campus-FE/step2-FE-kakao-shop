import React from 'react'
import styled from 'styled-components';   

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
`

const ColumnContainer = (props) => {
  return (
    <Container>{props.children}</Container>
  )
}

export default ColumnContainer