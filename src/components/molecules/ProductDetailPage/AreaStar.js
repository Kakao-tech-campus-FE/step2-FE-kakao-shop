import React from "react";

const AreaStar = ({ count }) => {
  const starIcons = [];

  for (let i = 0; i < count; i++) {
    starIcons.push(
      <span key={i} className="star-icon">
        ★
      </span>
    );
  }

  return <div className="area-star">{starIcons}</div>;
};

export default AreaStar;
