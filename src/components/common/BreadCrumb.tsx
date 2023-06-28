import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

function BreadCrumb() {
  const location = useLocation();
  const directory = location.pathname === '/' ? [''] : location.pathname.split('/');

  return (
    <div>
      {directory.map((path, index) => {
        if (path === '') {
          return <StyledLink to={`/`}>Home</StyledLink>;
        } else if (index === directory.length - 1) {
          return <StyledLink to={`${directory.slice(0, index + 1).join('/')}`}>{directory[index]}</StyledLink>;
        } else if (index === directory.length - 1 && directory.length === 2) {
          return (
            <>
              <span>&gt;</span>
              <StyledLink to={`${directory.slice(0, index + 1).join('/')}`}>{directory[index]}</StyledLink>
            </>
          );
        } else {
          return (
            <>
              <span>&gt;</span>
              <StyledLink to={`${directory.slice(0, index + 1).join('/')}`}>{directory[index]}</StyledLink>
              <span>&gt;</span>
            </>
          );
        }
      })}
    </div>
  );
}

export default BreadCrumb;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;
