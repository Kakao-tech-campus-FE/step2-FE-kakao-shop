import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';
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
      <MainProductsTemplate isLoading={isLoading} error={error} isError={isError} data={data}/>
    </Container>
  );
};

export default Main;