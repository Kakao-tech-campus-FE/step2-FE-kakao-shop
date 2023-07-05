import './App.css';
import BreadCrumb from './Components/Atoms/Breadcrumb/breadcrumb';
import Carousel from './Components/Atoms/Carousel/carousel';
import CheckBoxList from './Components/Atoms/Checklist/checklist';
import RadiobButtonGroup from './Components/Atoms/Radiobutton/radiogroup';
import Toasty from './Components/Atoms/Toast/toasty';
import { ToggleButton } from './Components/Atoms/Togglebutton/togglebutton';


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
