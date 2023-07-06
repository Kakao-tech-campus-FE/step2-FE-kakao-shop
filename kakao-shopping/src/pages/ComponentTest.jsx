import { Link } from 'react-router-dom';
import Toaster from '../components/Toaster'
import RadioButton from '../components/RadioButton'
import CheckBox from '../components/CheckBox'
import Carousel from '../components/Carousel';
import Toggle from '../components/Toggle';
import BreadCrumb from '../components/BreadCrumb';

const ComponentTest = () => {
  return (
    <div>
      <BreadCrumb />
      <Toaster></Toaster>
      <RadioButton />
      <CheckBox />
      <Carousel />
      <Toggle />
      <ul>
        <li><Link to="/ComponentTest/Bread">브레드 크럼 확인을 위한 링크</Link></li>
      </ul>
    </div>
  );
};

export default ComponentTest;
