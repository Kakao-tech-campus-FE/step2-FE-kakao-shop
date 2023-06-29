import React from 'react';

import './App.css';
import Radio from './components/radio/Radio';
import RadioGroup from './components/radio/RadioGroup';

const App = () => {
    return (
        <div className="app">
            <div className="app-header">
            <p>Hello world!</p>
            <RadioGroup label={'Radio Button'}/>
            </div>
        </div>
    );
}
export default App;