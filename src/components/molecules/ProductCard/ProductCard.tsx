import { ProductInfoData } from '@api/dto';
import PhotoCard from '@components/atoms/PhotoCard';
import Photo from '@components/atoms/Photo';
import comma from '@utils/commaUtils';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ProductCardProps {
  product: ProductInfoData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardComponent = (
    <Link to={`/product/${product.id}`}>
      <Photo
        setImgLoaded={setImgLoaded}
        src={`${process.env.REACT_APP_API_URL}${product.image}`}
        alt={product.productName}
      />
    </Link>
  );

  return (
    <div className="mb-[30px] w-[200px]">
      <PhotoCard productName={product.productName} productPrice={`${comma(product.price)}원`}>
        {imgLoaded ? (
          cardComponent
        ) : (
          <>
            <ProductCardSkeleton />
            <div className="hidden">{cardComponent}</div>
          </>
        )}
      </PhotoCard>
    </div>
  );
};

export default ProductCard;
