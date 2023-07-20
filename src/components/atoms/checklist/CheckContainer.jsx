import React from 'react'
import styled from 'styled-components';  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
`
const CheckContainer = (props) => {
    return (
      <Container>
        {props.children}
      </Container>
    );
};

export default CheckContainer