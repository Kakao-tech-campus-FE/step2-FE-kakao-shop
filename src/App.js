import "./App.css";
import Toast from "./components/Toast";
import Carousel from "./components/Carousel";
import Check from "./components/Check";
import Toggle from "./components/Toggle";
import Radio from "./components/Radio";
import Bread from "./components/Bread";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Container = styled.div`
  margin: 10px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

function App() {
  const Main = () => {
    return (
      <>
        <Carousel></Carousel>
        <Toast
          button="토스트"
          buttonStyle={{
            backgroundColor: "yellow",
            width: "100px",
            margin: "30px",
          }}
          message={"토스트"}
        ></Toast>

        <Link to="/cart">장바구니</Link>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Container>
        <Bread></Bread>

        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/cart" element={<Check />} />
          <Route path="/cart/pay" element={<Radio />} />
        </Routes>

        <Toggle></Toggle>
      </Container>
    </BrowserRouter>
  );
}

export default App;
