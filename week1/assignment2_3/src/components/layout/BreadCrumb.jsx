import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");

  return (
    <div className="breadcrumb">
      <Link className="breadcrumb-link" to="/">
        Home
      </Link>
      <span>
        {pathnames[pathnames.length - 1]
          ? ` > ${pathnames[pathnames.length - 1]}`
          : ""}
      </span>
    </div>
  );
};

export default Breadcrumb;
