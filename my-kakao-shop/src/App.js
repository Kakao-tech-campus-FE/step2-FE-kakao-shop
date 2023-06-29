import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";
import Toast from "./components/Toast";
import RadioSet from "./components/RadioButtons";
import RadioButtons from "./components/RadioButtons";
import ToggleButton from "./components/ToggleButton";
function App() {
  return (
    <div className="App">
        <Test/>
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