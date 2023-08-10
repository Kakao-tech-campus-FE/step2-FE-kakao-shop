import React from 'react';
import { useParams } from 'react-router-dom';

import { getCategoryName, getProductName } from '../Constants';

export const ProductDetail = ( {categoryId, productId} ) => {
  // const { categoryId, productId } = useParams();

  return (
    <div>
      <h5>상품 상세 페이지</h5>
      <p>카테고리: {getCategoryName(categoryId)}</p>
      <p>상품: {getProductName(categoryId, productId)}</p>
    </div>
  );
};
