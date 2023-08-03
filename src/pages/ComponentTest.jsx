import Toaster from '../components/molecules/componentTest/Toaster'
import RadioButton from '../components/molecules/componentTest/RadioButton'
import CheckBox from '../components/molecules/componentTest/CheckBox'
import Carousel from '../components/molecules/Carousel';
import Toggle from '../components/molecules/componentTest/Toggle';
import BreadCrumb from '../components/molecules/componentTest/BreadCrumb';

const ComponentTest = () => {
  return (
    <div>
      <BreadCrumb />
      <Toaster></Toaster>
      <RadioButton />
      <CheckBox />
      <Carousel />
      <Toggle />
    </div>
  );
};

export default ComponentTest;
