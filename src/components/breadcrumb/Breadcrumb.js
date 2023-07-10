import React from 'react';

function Breadcrumb({ paths }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li
            key={index}
            className={`breadcrumb-item${index === paths.length - 1 ? ' active' : ''}`}
            aria-current={index === paths.length - 1 ? 'page' : undefined}
          >
            {path}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
