import React from 'react';
import useGetProductsQuery from '../../apis/productApi';
import ProductGrid from '../organisms/ProductGrid';
import Container from '../atoms/Container';
import Loader from '../atoms/Loader';

const MainProductTemplate = () => {
  const { data: products, isSuccess, isLoading } = useGetProductsQuery({ page: 0 });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className='pb-16 pt-8'>
      <div>{isSuccess && products && <ProductGrid products={products} />}</div>
    </Container>
  );
};

export default MainProductTemplate;
