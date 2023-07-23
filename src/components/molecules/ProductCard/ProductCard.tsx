import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
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
        <Card>
          <Link to={`/product/${product.id}`}>
            <Photo
              setImgLoaded={setImgLoaded}
              src={`${process.env.REACT_APP_API_URL}${product.image}`}
              alt={product.productName}
            />
          </Link>
        </Card>
      </div>
      <div className="px-[10px]">
        <div>{product.productName}</div>
        <div className="absolute inset-x-0 bottom-0 mt-5">
          <PriceTag price={product.price} />
        </div>
      </div>
    </>
  );

  return (
    <div className="relative mb-[30px] w-[250px] h-[390px]">
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
