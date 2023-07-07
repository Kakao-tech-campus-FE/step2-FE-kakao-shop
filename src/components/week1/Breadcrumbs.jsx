import React from 'react';

const Breadcrumb = () => {
  const items = [{text:"hi"}, {text:"bye"}];
  return (
    <nav>
      <ol>
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item${index === items.length - 1 ? ' active' : ''}`}>
            {index === items.length - 1 ? (
              <span>{item.text}</span>
            ) : (
              <a href={item.text}>{item.text}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
