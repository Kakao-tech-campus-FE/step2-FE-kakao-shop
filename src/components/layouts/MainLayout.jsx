import React from "react";
import Navigation from "../../pages/Navigation";
import { Outlet } from "react-router-dom";
import MyCarousel from "../atoms/MyCarousel";
import Footer from "../atoms/Footer";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
`;

const MainLayout = () => {
  return (
    <Container>
      <Navigation />
      <br/>
      <br/>
      <MyCarousel />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default MainLayout;
