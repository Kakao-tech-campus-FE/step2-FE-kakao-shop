import React from 'react';

import './App.css';
import RadioGroup from './components/radio/RadioGroup';
import Layout from './components/layout/Layout';
import Badge from './components/badge/Badge';
import Carousel from './components/carousel/Carousel';
import ToggleGroup from './components/togglebtn/ToggleGroup';
import ToastGroup from './components/toast/ToastGroup';

const App = () => {
    return (
        <div className="app">
            <Layout children={
                <div className="app-header">
                    <span>Badge component</span>
                    <Badge text={"New!"} color={"purple"}/>
                    <RadioGroup/>
                    <ToggleGroup/>
                    <Carousel/>
                    <ToastGroup/>
                </div>
            }> 
            </Layout>
        </div>
    );
}
export default App;