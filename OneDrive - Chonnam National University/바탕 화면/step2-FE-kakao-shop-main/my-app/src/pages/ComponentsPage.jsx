import React from 'react';
import ToggleButton from '../components/togle';
import Toast from '../components/toast';
// import Carousel from '../components/carousel';
import Checklist from '../components/checklist';
import RadioButton from '../components/radiobutton';
// import Breadcrumb from '../components/breadcrumb';

const ComponentsPage = () => {
    return (
      <div>
        <h1>Components Page</h1>
        <ToggleButton />
        <Toast />
        {/* <Carousel /> */}
        <Checklist />
        <RadioButton />
        {/* <Breadcrumb /> */}
      </div>
    );
  };

  export default ComponentsPage;

  