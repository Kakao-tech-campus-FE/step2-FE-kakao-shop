import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { CategoryList } from './pages/CategoryList';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import './Breadcrumb.css';

import { crumbs } from './Constants';

const Router = () => (
  <Routes>
    <Route path="" element={<Link to="store">상품 목록</Link>} />
    <Route path="/store" element={<CategoryList />} />
    <Route path="/store/:categoryId" element={<ProductList />} />
    <Route path="/store/:categoryId/:productId" element={<ProductDetail />} />
  </Routes>
);

export const Breadcrumb = () => {
  const location = useLocation();
  const crumbArray = crumbs(location.pathname.split("/"))

  return (
    <div>
      <nav>
        <ol className="breadcrumbs">

          {crumbArray.map((crumb, index) => (
            <li className="breadcrumb-item" key={index}>
              {index !== crumbArray.length -1 ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="bread-item--active">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Router />
    </div>
  );
};
