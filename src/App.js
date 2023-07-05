import "./App.css";
import Toast from "./components/Toast";
import Breadcrumb from "./components/Breadcrumb";
import Radio from "./components/Radio";
import Toggle from "./components/Toggle";
import Checklist from "./components/Checklist";
import Carousel from "./components/Carousel";
import { styled } from "styled-components";
import { Reset } from "styled-reset";

const ComponentsName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`;

const InfoMessage = styled.p`
  color: #0087ff;
  font-size: 18px;
  margin: 10px 10px 30px 10px;
`;

function App() {
  return (
    <>
      <Reset />
      <ComponentsName>Toast</ComponentsName>
      <InfoMessage>
        Click the button below to display a toast message
      </InfoMessage>
      <Toast></Toast>
      <hr></hr>
      <ComponentsName>Breadcrumb</ComponentsName>
      <InfoMessage>
        Click on a category to navigate. Click on the previous category to go
        back.
      </InfoMessage>
      <Breadcrumb></Breadcrumb>
      <hr></hr>
      <ComponentsName>Carousel</ComponentsName>
      <InfoMessage>
        Slide through the photos by pressing the arrows on either side
      </InfoMessage>
      <Carousel></Carousel>
      <hr></hr>
      <ComponentsName>Radio</ComponentsName>
      <InfoMessage>
        Press the button to decide whether to issue a cash receipt or not
      </InfoMessage>
      <Radio></Radio>
      <hr></hr>
      <ComponentsName>Toggle</ComponentsName>
      <InfoMessage>
        Press the button to decide whether to stay logged in or not
      </InfoMessage>
      <Toggle></Toggle>
      <hr></hr>
      <ComponentsName>CheckList</ComponentsName>
      <InfoMessage>Agree to the terms by clicking the checkbox</InfoMessage>
      <Checklist></Checklist>
      <hr></hr>
    </>
  );
}

export default App;
