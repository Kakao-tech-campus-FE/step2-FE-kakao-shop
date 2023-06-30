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
                        <Route path='/badge' element={
                            <BadgeGroup/>
                        }/>
                        <Route  path='/radio' element={
                            <RadioGroup/>
                        }/>
                        <Route  path='/toggle' element={
                            <ToggleGroup/>
                        }/>
                        <Route  path='/carousel' element={
                            <Carousel/>
                        }/>
                        <Route  path='/toast' element={
                            <ToastGroup/>
                        }/>
                        <Route  path='/checklist' element={
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