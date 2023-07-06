import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "../styles/breadcrumb.css"

const BreadcrumbPortal = () => (
  <nav aria-label="Breadcrumb">
    <ol id="breadcrumb" />
  </nav>
);

const Breadcrumb = ({ children, to, ...props }) => {
  const [portalNode, setPortalNode] = useState();

  useEffect(() => {
    setPortalNode(document.getElementById("breadcrumb"));
  }, []);

  return portalNode
    ? ReactDOM.createPortal(
        <li className="breadcrumb-item" {...props}>
          <NavLink className="breadcrumb-url" to={to}>{children}</NavLink>
        </li>,
        portalNode
      )
    : null;
};

export { Breadcrumb, BreadcrumbPortal };