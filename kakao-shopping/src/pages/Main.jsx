import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import GNB from '../components/templates/GNB';
import Container from '../components/atoms/Container';

const HomePage = () => {
  return (
    <Container className="border bg-slate-100 border-slate-500 border-solid rounded-md">
      <BreadCrumb></BreadCrumb>
      <GNB />
    </Container>
  );
};

export default HomePage;