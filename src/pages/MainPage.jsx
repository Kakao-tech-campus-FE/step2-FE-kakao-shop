import React from 'react'
import Carousel from '../components/molecules/Carousel'
import styled from 'styled-components';  
import ContentContainer from '../components/atoms/ContentContainer'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Container = styled.div`
  margin: 10px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: stretch;
  width: 600px;
`;

const MainPage = () => {
    return (
      <ContentContainer>
        <Carousel></Carousel>
      </ContentContainer>
    );
  };

  export default MainPage