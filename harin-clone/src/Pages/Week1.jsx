import '../week1.css';
import BreadCrumb from '../Components/Atoms/week1Compo/Breadcrumb/breadcrumb';
import Carousel from '../Components/Atoms/week1Compo/Carousel/carousel';
import CheckBoxList from '../Components/Atoms/week1Compo/Checklist/checklist';
import RadiobButtonGroup from '../Components/Atoms/week1Compo/Radiobutton/radiogroup';
import Toasty from '../Components/Atoms/week1Compo/Toast/toasty';
import ToggleButton from '../Components/Atoms/week1Compo/Togglebutton/togglebutton';


const Week1 = () => {
  const style="font-bold"

  return (
    <>
      <h2>[1주차 과제] 부산대 FE 민하린</h2>
        <h3 className={style}>Toast</h3>
        <Toasty />
        <hr/>
 
        <h3 className={style}>Breadcrumb</h3>
        <BreadCrumb />
        <hr/>

        <h3 className={style}>Carousel</h3>
        <Carousel />
        <hr/>

        <h3 className={style}>Radio Button</h3>
        <RadiobButtonGroup />
        <hr/>

        <h3 className={style}>Toggle Button</h3>
        <ToggleButton />
        <hr/>

        <h3 className={style}>Check List</h3>
        <CheckBoxList />

    </>

  );
}

export default Week1;
