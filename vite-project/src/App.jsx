// import React, { useState } from "react";
// import Toggle from "./components_w1/Toggle";
// import Toast from "./components_w1/Toast";
// import Radio from "./components_w1/Radio";
// import CheckList from "./components_w1/CheckList";
// import BreadCrumb from "./components_w1/BreadCrumb";
// import Carousel from './components_w1/Carousel';

// function App() {
//   const [isToggled, setIsToggled] = useState(false);
//   const handleShowToast = () => {
//   };
//   const paths = ['홈', '페이지', '서브페이지'];
//   const images = [
//     'carouselItem1.jpeg',
//     'carouselItem2.jpeg',
//     'carouselItem3.jpeg',
//   ];

//   return (
//     <>
//     <div className="App">
//       <Toggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
//     </div>
//     <br />

//       <Toast />
//     <br />

//       <Radio />
//     <br />

//       <CheckList />
//     <br />

//     <div className="App">
//       <BreadCrumb paths={paths} />
//     </div>
//     <br />

//     <div className="App">
//       <Carousel images={images} />
//     </div>

//     </>
//   )
// }

// export default App

// week1 내용은 우선 주석 처리해두었습니다.

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginPage />}></Route>
          {/* {단독 레이아웃} */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* {공통 레이아웃: GNB, Footer } */}
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
