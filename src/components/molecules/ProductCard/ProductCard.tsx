import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
import Photo from '@components/atoms/Photo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PriceTag from '@components/atoms/PriceTag';
import comma from '@utils/commaUtils';
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
          <div className="-mx-7 -my-7">
            <Link to={`/product/${product.id}`}>
              <Photo
                setImgLoaded={setImgLoaded}
                src={`${process.env.REACT_APP_API_URL}${product.image}`}
                alt={product.productName}
              />
            </Link>
          </div>
        </Card>
      </div>
      <div className="px-[10px]">
        <div>{product.productName}</div>
        <div className="absolute inset-x-0 bottom-0 mt-5 text-xl">
          <PriceTag>{comma(product.price)}원</PriceTag>
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
