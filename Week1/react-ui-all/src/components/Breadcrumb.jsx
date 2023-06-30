import React from "react"; // eslint-disable-line no-unused-vars
import "./Breadcrumb.css";

export const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li className="breadcrumb-item" key={index}>
            {index === paths.length - 1 ? (
              <span>{path}</span>
            ) : (
              <React.Fragment>
                <a href={`/${path}`}>{path}</a>
                <span className="breadcrumb-seperator">{`>`}</span>
              </React.Fragment>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
