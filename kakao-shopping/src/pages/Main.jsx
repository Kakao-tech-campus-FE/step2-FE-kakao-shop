import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';
import MainProductsForm from '../components/organisms/MainProductsForm';

const HomePage = () => {
  return (
    <Container>
      <GNB />
      <MainProductsForm />
    </Container>
  );
};

export default HomePage;