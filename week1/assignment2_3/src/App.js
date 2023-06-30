import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import RadioGroup from './components/radio/RadioGroup';
import Layout from './components/layout/Layout';
import Carousel from './components/carousel/Carousel';
import ToggleGroup from './components/togglebtn/ToggleGroup';
import ToastGroup from './components/toast/ToastGroup';
import Checklist from './components/checklist/Checklist';
import BadgeGroup from './components/badge/BadgeGroup';
import MainPage from './components/mainpage/mainpage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout children={
                <div className="children">
                    <Routes>
                        <Route exact path='/' element={
                            <MainPage/>
                        }/>
                        <Route path='/Badge' element={
                            <BadgeGroup/>
                        }/>
                        <Route  path='/RadioButton' element={
                            <RadioGroup/>
                        }/>
                        <Route  path='/ToggleButton' element={
                            <ToggleGroup/>
                        }/>
                        <Route  path='/Carousel' element={
                            <Carousel/>
                        }/>
                        <Route  path='/Toast' element={
                            <ToastGroup/>
                        }/>
                        <Route  path='/Checklist' element={
                            <Checklist/>
                        }/>
                    </Routes>
                </div>
            }> 
            </Layout>
        </BrowserRouter>
    );
}
export default App;