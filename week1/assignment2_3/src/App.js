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
import Frame from './components/frame/Frame';

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
                            <Frame children={<BadgeGroup/>}/>
                        }/>
                        <Route  path='/RadioButton' element={
                            <Frame children={<RadioGroup/>}/>
                        }/>
                        <Route  path='/ToggleButton' element={
                            <Frame children={<ToggleGroup/>}/>
                        }/>
                        <Route  path='/Carousel' element={
                            <Frame children={<Carousel/>} paddingVal={60}/>
                        }/>
                        <Route  path='/Toast' element={
                            <Frame children={<ToastGroup/>}/>
                        }/>
                        <Route  path='/Checklist' element={
                            <Frame children={<Checklist/>}/>
                        }/>
                    </Routes>
                </div>
            }> 
            </Layout>
        </BrowserRouter>
    );
}
export default App;