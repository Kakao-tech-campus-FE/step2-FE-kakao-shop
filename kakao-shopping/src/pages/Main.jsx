import React from 'react';
import { Link } from 'react-router-dom';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';

const HomePage = () => {
  return (
    <Container>
      <GNB />
    </Container>
  );
};

export default HomePage;