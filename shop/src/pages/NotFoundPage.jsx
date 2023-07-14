import React from 'react';
import styled  from 'styled-components';

const StyledHeader = styled.div`
  font-size:80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NotFoundPage = () => {
  return (
    <StyledHeader>
      <h1>404 - Page Not Found</h1>
    </StyledHeader>
  );
};

export default NotFoundPage;