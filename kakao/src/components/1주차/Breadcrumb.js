import React, { useState } from "react";

const Breadcrumb = () => {
  const [path, setPath] = useState([]);

  const handlePathChange = (newPath) => {
    setPath([...newPath]);
  };

  const buttons = [
    { label: "Home", path: [] },
    { label: "Products", path: ["Products"] },
    { label: "Category", path: ["Products", "Category"] },
    { label: "Item", path: ["Products", "Category", "Item"] },
  ];

  return (
    <div className="Breadcrumb">
      <h3>Breadcrumb</h3>
      <div className="BreadcrumbBtn">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handlePathChange(button.path)}>
            {button.label}
          </button>
        ))}
      </div>
      <ul className="crumb">
        {path.map((item, index) => (
          <li key={index}>
            {item}
            {index !== path.length - 1 && (
              <>
                <span className="material-symbols-outlined">navigate_next</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
