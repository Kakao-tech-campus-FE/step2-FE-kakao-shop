import { ProductInfoData } from '@api/dto';
import PhotoCard from '@components/atoms/PhotoCard';
import Photo from '@components/atoms/Photo';
import comma from '@utils/commaUtils';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PriceTag from '@components/atoms/PriceTag';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ProductCardProps {
  product: ProductInfoData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardComponent = (
    <>
      <div className="mb-5">
        <PhotoCard>
          <Link to={`/product/${product.id}`}>
            <Photo
              setImgLoaded={setImgLoaded}
              src={`${process.env.REACT_APP_API_URL}${product.image}`}
              alt={product.productName}
            />
          </Link>
        </PhotoCard>
      </div>
      <div className="px-[10px]">
        <p>{product.productName}</p>
        <PriceTag price={product.price} />
      </div>
    </>
  );

  return (
    <div className="mb-[30px] w-[250px]">
      {imgLoaded ? (
        cardComponent
      ) : (
        <>
          <ProductCardSkeleton />
          <div className="hidden">{cardComponent}</div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
