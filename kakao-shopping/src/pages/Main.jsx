import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';
import MainProductsTemplate from '../components/templates/MainProductsTemplate';
import { useQuery } from 'react-query';
import { getProducts } from '../apis/api';

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery("products", getProducts);
  
  if(isError) {
    return (
      <Container className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold mb-2">에러가 발생했습니다</span>
        <span className="text-lg mb-2">{error.message}</span>
        <Link to="/main" className="text-lg">메인으로 돌아가기</Link>
      </Container>
    )
  }
  return (
    <Container>
      <GNB />
      <MainProductsTemplate isLoading={isLoading} data={data}/>
    </Container>
  );
};

export default HomePage;