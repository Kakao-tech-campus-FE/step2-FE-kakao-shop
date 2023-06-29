import React from 'react';

import './App.css';
import RadioGroup from './components/radio/RadioGroup';
import Layout from './components/layout/Layout';
import Toggle from './components/togglebtn/ToggleBtn';
import Badge from './components/badge/Badge';
import Carousel from './components/carousel/Carousel';

const App = () => {
    return (
        <div className="app">
            <Layout children={
                <div className="app-header">
                    <span>Badge component</span>
                    <Badge text={"New!"} color={"purple"}/>
                    <RadioGroup/>
                    <Toggle/>
                    <Carousel/>
                </div>
            }> 
            </Layout>
        </div>
    );
}
export default App;