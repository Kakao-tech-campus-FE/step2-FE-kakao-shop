import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

function BreadCrumb() {
  const location = useLocation();
  const directory = location.pathname === '/' ? [''] : location.pathname.split('/');
  return (
    <div>
      {directory.map((path, index) =>
        index === directory.length - 1 ? (
          <span key="path">{path === '' ? 'Home' : path}</span>
        ) : (
          <>
            <StyledLink key="path" to={index === 0 ? '/' : `${directory.slice(0, index + 1).join('/')}`}>
              {path === '' ? 'Home' : path}
            </StyledLink>
            <span>&gt;</span>
          </>
        )
      )}
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
