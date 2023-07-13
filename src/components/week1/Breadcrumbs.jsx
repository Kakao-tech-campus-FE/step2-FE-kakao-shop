import React from 'react';
import { useLocation } from 'react-router-dom';
import * as bread from '../../styles/Breadcrumbs';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <bread.Container>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        console.log(routeTo);
        return isLast ? (
          <span key={name}>{name}</span>
        ) : (
            <span>
                <bread.BreadNav key={name} to={routeTo}>{name}</bread.BreadNav> /&nbsp;
            </span>
        );
      })}
        <bread.NavContainer>
            {pathnames.length === 1 && (
            <bread.Nav to="/home/level1">level1</bread.Nav>
            )}
        </bread.NavContainer>
    </bread.Container>
  );
};

export default Breadcrumbs;