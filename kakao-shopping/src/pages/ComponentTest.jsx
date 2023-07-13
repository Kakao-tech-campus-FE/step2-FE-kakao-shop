import Toaster from '../components/molecules/Toaster'
import RadioButton from '../components/molecules/RadioButton'
import CheckBox from '../components/molecules/CheckBox'
import Carousel from '../components/molecules/Carousel';
import Toggle from '../components/molecules/Toggle';
import BreadCrumb from '../components/molecules/BreadCrumb';

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
