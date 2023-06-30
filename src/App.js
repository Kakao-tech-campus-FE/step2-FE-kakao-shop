import './App.css';
import Badge from './components/Badge'
import Toast from './components/Toast'
import Carousel from './components/Carousel';
import BreadCrumb from './components/BreadCrumb';
import RadioButton from './components/RadioButton';
import CheckList from './components/CheckList';
import { Reset } from 'styled-reset'
import { Component, useEffect } from 'react';
import Toggle from './components/Toggle';

function App() {
  return (
    <>
      <BreadCrumb></BreadCrumb>
      <Badge styleArgument={"blue"}>Good</Badge>
      <Badge styleArgument={"red"}>BAD</Badge>
      <Carousel></Carousel>
      <Toast>Error!!</Toast>
      <BreadCrumb></BreadCrumb>
      <Toggle></Toggle>
      <CheckList/>
      <RadioButton/> 
    </>
  );
}

export default App;

