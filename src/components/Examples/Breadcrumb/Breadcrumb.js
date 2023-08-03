import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { CategoryList } from './pages/CategoryList';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import './Breadcrumb.css';

import { crumbs } from './Constants';


const content = (pathnames) => {
  const depth = pathnames.length;

  switch (depth) {
    case 4: return <ProductDetail categoryId={Number(pathnames[2])} productId={Number(pathnames[3])}/>
    case 3: return <ProductList categoryId={Number(pathnames[2])}/>
    default: {
      if (pathnames.includes("store"))
        return <CategoryList />
      else return <Link to="store">상품 목록</Link>
    }
  }
}

export const Breadcrumb = () => {
  const location = useLocation();
  const crumbArray = crumbs(location.pathname.split("/"));

  return (
    <div>
      <nav>
        <ol className="breadcrumbs">

          {crumbArray.map((crumb, index) => (
            <li className="breadcrumb-item" key={index}>
              {index !== crumbArray.length - 1 ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="bread-item--active">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {content(location.pathname.split("/"))}
    </div>
  );
};
