import './App.css';
import ToastControlBox from "./components/toastControlBox";
import BreadcrumbControlBox from "./components/breadcrumbControlBox";
import CarouselControlBox from "./components/carouselControlBox";
import CheckboxControlBox from "./components/checkboxControlBox";
import RadioControlBox from "./components/radioControlBox";
import ToggleControlBox from "./components/toggleControlBox";


function App() {


    return (
        <div className="App">
            <ToastControlBox/>
            <hr/>
            <BreadcrumbControlBox/>
            <hr/>
            <CarouselControlBox/>
            <hr/>
            <CheckboxControlBox/>
            <hr/>
            <RadioControlBox/>
            <hr/>
            <ToggleControlBox/>


        </div>
    );
}

export default App;
