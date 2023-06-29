import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";
import Toast from "./components/Toast";
import RadioSet from "./components/RadioButtons";
import RadioButtons from "./components/RadioButtons";
import ToggleButton from "./components/ToggleButton";
import Carousel from "./components/Carousel";
function App() {
  return (
    <div className="App">
        <Test/>
        <Carousel images={[
            "https://ssl.pstatic.net/melona/libs/1446/1446115/64d1befa4f25f5e6bc7f_20230628162103835.jpg",
            "https://ssl.pstatic.net/melona/libs/1446/1446871/737820e7320cff453d40_20230616170502750.PNG",
            "https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-background-wallpaper-image_396550.jpg"]}/>
        <RadioButtons options={ [
            {label: "카카오페이머니", value: "kakao-pay-money"},
            {label: "카카오페이카드", value: "kakao-pay-card"},
        ] }/>
        <ToggleButton/>
        <Toast title={"Toast Title"} message={"Toast Message"} time={3000}/>
    </div>
  );
}


export default App;