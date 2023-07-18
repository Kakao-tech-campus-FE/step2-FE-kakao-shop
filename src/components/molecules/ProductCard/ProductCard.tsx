import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
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
      <h3>{product.productName}</h3>
      <p>{comma(product.price)}</p>
    </Link>
  );

  return (
    <div className="mb-[30px]">
      <Card>
        <div className="w-[200px] h-[300px]">
          {imgLoaded ? (
            cardComponent
          ) : (
            <>
              <ProductCardSkeleton /> {cardComponent}
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
