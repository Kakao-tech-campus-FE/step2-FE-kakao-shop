import React from 'react';

function BreadCrumb({ paths }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li className={`breadcrumb-item${index === paths.length - 1 ? ' active' : ''}`} aria-current={index === paths.length - 1 ? 'page' : undefined} key={path}>
            {index === paths.length - 1 ? (
              <span>{path}</span>
            ) : (
              <a href="#">{path}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumb;