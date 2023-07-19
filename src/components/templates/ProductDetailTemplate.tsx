import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../atoms/Container';
import ProductOptionColumn from '../organisms/ProductOptionColumn';
import ProductInformationColumn from '../organisms/ProductInformationColumn';
import NoProductTemplate from './NoProductTemplate';
import { useGetProductQuery } from '../../apis/productApi';

const ProductDetailTemplate = () => {
  const { id: productId } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(Number.parseInt(productId ?? '', 10));

  return isSuccess ? (
    <Container className='flex'>
      <ProductInformationColumn image={product.image} price={product.price} productName={product.productName} />
      <ProductOptionColumn options={product.options} />
    </Container>
  ) : (
    <NoProductTemplate />
  );
};

export default ProductDetailTemplate;
