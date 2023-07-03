import React from 'react';
import { Link, useParams} from 'react-router-dom';
import { getProducts, getCategoryName } from '../Constants';

export const ProductList = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h5>상품 목록 페이지</h5>
      <p>카테고리: {getCategoryName(categoryId)}</p>
      <ul>
      {getProducts(categoryId).map((product, index) => (
          <li><Link to={""+product.id}>{product.name}</Link></li>
        ))}
      </ul>
    </div>
  );
};
