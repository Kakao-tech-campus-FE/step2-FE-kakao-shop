import React from 'react'
import styled from 'styled-components'; 

const Container = styled.div`
    box-shadow: 0px 0px 5px rgb(199, 199, 199);
    border-radius: 8px;
`

const GradientBorderBox = ( { className, children } ) => {
  return (
      <Container className={className}>
        {children}
      </Container>
  );
};

export default GradientBorderBox