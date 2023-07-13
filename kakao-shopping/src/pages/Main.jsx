import React from 'react';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';
import Carousel from '../components/molecules/Carousel';
import MainProductsTemplate from '../components/templates/MainProductsTemplate';
import { useQuery } from 'react-query';
import { getProducts } from '../apis/api';

const Main = () => {
  const { data, isLoading, isError, error } = useQuery("products", getProducts, {
    onError: (error) => {
      console.log(error);
    }
  });
  
  return (
    <Container>
      <GNB />
      <Carousel />
      <MainProductsTemplate isLoading={isLoading} error={error} isError={isError} data={data}/>
    </Container>
  );
};

export default Main;