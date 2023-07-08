import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';
import MainProducts from '../components/organisms/MainProducts';

const HomePage = () => {
  return (
    <Container>
      <GNB />
      <MainProducts />
    </Container>
  );
};

export default HomePage;