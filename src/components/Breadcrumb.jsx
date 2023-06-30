import React from "react";
import { Link, useLocation } from "react-router-dom";

import '../styles/Breadcrumb.css'

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={index}>{path}</span>
        ) : (
          <Link key={index} to={routeTo}>{path}</Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;