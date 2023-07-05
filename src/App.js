import "./App.css";
import Toast from "./components/Toast";
import CheckList from "./components/CheckList";
import RadioButton from "./components/RadioButton";
import Breadcrumb from "./components/Breadcrumb";
import ToogleButton from "./components/ToogleButton";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <>
      <Toast children={"상품이 품절되었습니다."} />
      <Carousel></Carousel>
      <Breadcrumb main={"패션"}></Breadcrumb>
      <CheckList>데일리 스크럼</CheckList>
      <CheckList>모각코</CheckList>
      <div></div>
      <RadioButton name={"1번"}></RadioButton>
      <RadioButton name={"2번"}></RadioButton>
      <ToogleButton></ToogleButton>
    </>
  );
}

export default App;
