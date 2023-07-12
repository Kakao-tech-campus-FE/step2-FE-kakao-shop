import React from 'react';
import useGetProductsQuery from '../apis/productApi';
import ProductGrid from '../components/organisms/ProductGrid';
import Container from '../components/atoms/Container';

const MainProductTemplate = () => {
  const { data: products, isSuccess } = useGetProductsQuery({ page: 0 });

  return (
    <Container className='pb-28 pt-8'>
      <div>{isSuccess && products && <ProductGrid products={products} />}</div>
    </Container>
  );
};

export default MainProductTemplate;
