import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
import Photo from '@components/atoms/Photo';
import comma from '@utils/commaUtils';
import React, { useState, useEffect } from 'react';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ProductCardProps {
  product: ProductInfoData;
  size: number;
}

const ProductCard = ({ product, size }: ProductCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardComponent = (
    <>
      <Photo
        setImgLoaded={setImgLoaded}
        src={`${process.env.REACT_APP_API_URL}${product.image}`}
        alt={product.productName}
      />
      <h3>{product.productName}</h3>
      <p>{comma(product.price)}</p>
    </>
  );

  return (
    <div className="w-[200px] h-[300px] bg-white rounded drop-shadow mb-[30px] p-[5px]">
      <Card to={`/product/${product.id}`}>
        {imgLoaded ? (
          cardComponent
        ) : (
          <>
            <ProductCardSkeleton /> {cardComponent}
          </>
        )}
      </Card>
    </div>
  );
};

export default ProductCard;
