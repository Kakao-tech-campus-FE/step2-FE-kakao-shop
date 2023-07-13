import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../Constants';

export const CategoryList = () => {

  return (
    <div>
      <h5>카테고리 목록 페이지</h5>
      <ul>
        {getCategories().map((category, index) => (
          <li><Link to={"store/" + category.id}>{category.name}</Link></li>
        ))}
      </ul>
    </div>
  );
};
