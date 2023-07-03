import './App.css';
import Toast from "./components/Toast";
import RadioButtons from "./components/RadioButtons";
import ToggleButton from "./components/ToggleButton";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";
import {useState} from "react";
import CheckList from "./components/CheckList";
import Breadcrumb from "./components/Breadcrumb";
function App() {
    const [isToggled, setIsToggled] = useState(false);

    const [agreeCheckList, setAgreeCheckList] = useState([
        {label: "이용약관 동의", checked: false},
        {label: "개인정보 수집 및 이용 동의", checked: false},
    ]);


  return (
    <div className="App">
        <span className={"check-test"}></span>
            <Carousel images={[
                "https://ssl.pstatic.net/melona/libs/1446/1446115/64d1befa4f25f5e6bc7f_20230628162103835.jpg",
                "https://ssl.pstatic.net/melona/libs/1446/1446871/737820e7320cff453d40_20230616170502750.PNG",
                "https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-background-wallpaper-image_396550.jpg"]}/>
            <div className={"main-container"}>
                <div className={"sub-container"}>
                <RadioButtons options={ [
                    {label: "카카오페이머니", value: "kakao-pay-money"},
                    {label: "카카오페이카드", value: "kakao-pay-card"},
                ] }/>

            <div className={"accordion-container"}>
                <Accordion title={"Accordion Title"} content={"Accordion ContentAccordion ContentAccordion ContentAccordion ContentAccordion ContentAccordion ContentAccordion ContentAccordion ContentAccordion Content"}/>
            </div>

            <ToggleButton isToggled={isToggled} setIsToggled={setIsToggled}/>

            <Toast title={"Toast Title"} message={"Toast Message"} time={3000} toggle={isToggled}/>
            <CheckList checkList={agreeCheckList} setCheckList={setAgreeCheckList}/>

            <Breadcrumb path={
                [
                    {label: "daum", link: "https://www.daum.net/"},
                    {label: "kakao", link: "https://www.kakaocorp.com/page/"},
                    {label: "Product", link: "https://store.kakao.com/"},
                ]
            }/>
                </div>
        </div>
    </div>
  );
}


export default App;