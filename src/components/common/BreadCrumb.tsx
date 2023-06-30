import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

function BreadCrumb() {
  const location = useLocation();
  const directory = location.pathname === '/' ? [''] : location.pathname.split('/');
  console.log(directory);
  console.log('home', directory.slice(0, 1).join('/'));
  return (
    <div>
      {directory.map((path, index) =>
        index === directory.length - 1 ? (
          <span>{path === '' ? 'Home' : path}</span>
        ) : (
          <>
            <StyledLink to={index === 0 ? '/' : `${directory.slice(0, index + 1).join('/')}`}>{path === '' ? 'Home' : path}</StyledLink>
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
