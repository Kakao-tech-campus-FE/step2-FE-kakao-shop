import React from 'react';
import styled from 'styled-components';

const Breadcrumb = ({ paths }) => {
  return (
    <Nav>
      <CrumbsList>
        {paths.map((path, index) => (
          <Crumb key={index}>
            {index !== paths.length - 1 ? <CrumbLink href={path}>{path}</CrumbLink> : path}
          </Crumb>
        ))}
      </CrumbsList>
    </Nav>
  );
};

const Nav = styled.nav`
  border-bottom: 1px solid black;
  padding: 0 20px;
`;

const CrumbsList = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const Crumb = styled.li`
  display: inline-block;
`;

const CrumbLink = styled.a`
  display: inline-block;
  color: #000;

  &::after {
    content: '>';
    font-size: 80%;
    font-weight: bold;
    padding: 0 3px;
  }
`;

export default Breadcrumb;
