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

      <fieldset style={style}>
        <legend>Toast</legend>
        <Toasty />
      </fieldset>

      <fieldset style={style}>
        <legend>Breadcrumb</legend>
        <BreadCrumb />
      </fieldset>

      <fieldset style={style}>
        <legend>Carousel</legend>
        <Carousel />
      </fieldset>

      <fieldset style={style}>
        <legend>Radio Button</legend>
        <RadiobButtonGroup />
      </fieldset>

      <fieldset style={style}>
        <legend>Toggle Button</legend>
        <ToggleButton />
      </fieldset>
      
      <fieldset style={style}>
        <legend>Check List</legend>
        <CheckBoxList />
      </fieldset>
    </form>

  );
}

export default App;
