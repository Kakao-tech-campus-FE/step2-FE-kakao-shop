import React from "react";
import "../styles/Breadcrumbs.css";

const Breadcrumbs = ({ paths, onClick }) => {
  return (
    <div className="breadcrumbs">
      {paths.map((path, index) => {
        const isLastPath = index === paths.length - 1;
        return (
          <span key={path.url}>
            {isLastPath ? (
              <span className="current-path">{path.name}</span>
            ) : (
              <p className="path" onClick={() => onClick(path.url)}>
                {path.name}
              </p>
            )}
            {!isLastPath && <span className="separator">/</span>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
