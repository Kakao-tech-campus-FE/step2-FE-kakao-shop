import React from "react";

const Breadcrumb = ({ path }) => {
  return (
    <div className="breadcrumb">
      {path.map((item, index) => {
        if (index === path.length - 1) {
          return (
            <span className={"breadcrumb-link"} key={index}>
              <a href={item.link}>{item.label}</a>
            </span>
          );
        } else {
          return (
            <span className={"breadcrumb-link"} key={index}>
              <a href={item.link}>{item.label}</a> &gt;{" "}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumb;
