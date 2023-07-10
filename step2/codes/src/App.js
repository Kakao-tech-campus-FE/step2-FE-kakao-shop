import TToast from "./component/toast/TToast";
import Carousel from "./component/carousel/carousel";
import Toggle from "./component/toggle/Toggle";
import Checklist from "./component/checklist/Checklist";
import RadioButton from "./component/radiobutton/radiobutton";
import Breadcrumb from "./component/breadcrumb/breadcrumb";


function App() {
  const breadcrumbItems = [
    { label: '홈', url: '/' },
    { label: '제품', url: '/products' },
    { label: '카테고리', url: '/products/category' },
    { label: '제품 상세', url: '/products/category/product' }
  ];

  const WantedImg = ["/img/forcarousel/red.png","/img/forcarousel/orange.png","/img/forcarousel/yellow.png","/img/forcarousel/green.png","/img/forcarousel/blue.png"];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems}/>
      <TToast />
      <Carousel images = {WantedImg}/>
      <Toggle />
      <Checklist/>
      <RadioButton/>
    </div>

  );
}

export default App;