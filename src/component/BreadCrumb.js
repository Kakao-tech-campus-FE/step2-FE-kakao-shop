import React from 'react';

const BreadCrumb = ({ items }) => {
  return (
    <nav aria-label="breadCrumb">
      <ol className="breadCrumb">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index !== items.length - 1 ? (
              <React.Fragment>
                <a href="food">{item}</a>
                <span> {'>'} </span>
              </React.Fragment>
            ) : (
              // 마지막 아이템인 경우에는 텍스트만 표시
              <span>{item}</span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;