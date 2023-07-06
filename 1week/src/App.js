import React, {Component} from "react";
import ReactDOM from 'react-dom';
import CheckList from "./components/CheckList";
import Radio from "./components/Radio";
import Toggle from "./components/Toggle";
import Toast from "./components/Toast";
import BreadCrumb from "./components/BreadCrumb";
import Carousel from "./components/Carousel";

class App extends Component {
  render() {
        return (
          <>
          <CheckList />
          <Radio />
          <Toggle />
          <Toast />
          {/* <BreadCrumb /> */}
          {/* <Carousel /> */}
          </>
       );
    }
  }

export default App;
