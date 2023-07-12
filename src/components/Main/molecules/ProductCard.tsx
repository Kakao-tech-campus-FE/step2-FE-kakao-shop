import React, { useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import Picture from '../../common/atoms/Picture';
import ProductDescription from '../atoms/ProductDescription';
import ProductName from '../atoms/ProductName';
import ProductPrice from '../atoms/ProductPrice';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  price: number;
  isLast: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function ProductCard({ name, image, description, price, isLast, setPage }: ProductCardProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const isIntersecting = useIntersectionObserver(targetRef, { threshold: 1.0 }, isLast);
  useEffect(() => {
    console.log(isIntersecting);
    isIntersecting && setPage((prev) => prev + 1);
  }, [isIntersecting]);
  return (
    <Wrap ref={targetRef}>
      <Picture src={image} width={200} height={200} alt={name + '이미지'} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{price}원~</ProductPrice>
    </Wrap>
  );
}

export default ProductCard;

const Wrap = styled.div`
  margin: 10px;
`;
