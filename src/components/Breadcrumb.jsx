import React from "react";
import "../styles/Breadcrumb.css";

const Breadcrumb = (props) => {
  if (props.currentPage === "Main") {
    return (
      <div className="breadcrumb">
        <span>Main </span>
      </div>
    );
  } else {
    return (
      <div className="breadcrumb">
        <span><a href="/">Main</a></span>
        <span> / </span>
        <span>{props.currentPage}</span>
      </div>
    );
  }
  
};

export default Breadcrumb;
