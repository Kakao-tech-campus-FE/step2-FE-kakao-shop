import "./App.css";
import Toast from "./components/molecules/Toast";
import Carousel from "./components/molecules/Carousel";
import Check from "./components/molecules/Check";
import Toggle from "./components/molecules/Toggle";
import Radio from "./components/molecules/Radio";
import Bread from "./components/molecules/Bread";
import styled from "styled-components";
import RegisterForm from "./components/organisms/RegisterForm";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// const Container = styled.div`
//   margin: 10px;
//   display: flex;
//   position: absolute;
//   flex-direction: column;
//   align-items: center;
//   width: 600px;
// `;

function App() {
  return <RegisterForm id="register"></RegisterForm>;
  // const Main = () => {
  //   return (
  //     <>

  //       <Carousel></Carousel>
  //       <Toast
  //         button="토스트"
  //         buttonStyle={{
  //           backgroundColor: "yellow",
  //           width: "100px",
  //           margin: "30px",
  //         }}
  //         message={"토스트"}
  //       ></Toast> */

  //       <Link to="/cart">장바구니</Link>
  //     </>
  //   );
  // };

  // return (
  //   <BrowserRouter>
  //     <Container>
  //       <Bread></Bread>

  //       <Routes>
  //         <Route path="*" element={<Main />} />
  //         <Route path="/cart" element={<Check />} />
  //         <Route path="/cart/pay" element={<Radio />} />
  //       </Routes>

  //       <Toggle></Toggle>
  //     </Container>
  //   </BrowserRouter>
  // );
}

export default App;
