import './App.css';
import BreadCrumb from './Components/Breadcrumb/breadcrumb';
import Carousel from './Components/Carousel/carousel';
import CheckBoxList from './Components/Checklist/checklist';
import RadiobButtonGroup from './Components/Radiobutton/radiogroup';
import Toasty from './Components/Toast/toasty';
import { ToggleButton } from './Components/Togglebutton/togglebutton';


function App() {
  const style = {
    padding: '50px',
    margin: '30px',
    borderColor: '#be70f2'
  }

  return (
    <form>
      <h2>[1주차 과제] 부산대 FE 민하린</h2>


        <h3>Toast</h3>
        <Toasty />

 
        <h3>Breadcrumb</h3>
        <BreadCrumb />



        <h3>Carousel</h3>
        <Carousel />



        <h3>Radio Button</h3>
        <RadiobButtonGroup />



        <h3>Toggle Button</h3>
        <ToggleButton />

      

        <h3>Check List</h3>
        <CheckBoxList />

    </form>

  );
}

export default App;
