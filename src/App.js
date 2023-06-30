import "./App.css";
import Toast from "./components/Toast.js";
import Breadcrumb from "./components/Breadcrumb.js";

function App() {
  return (
    <div className="App">
      <h1>JsH 쇼핑하기</h1>
      <h2>TEST Page</h2>
      <h3>Toast</h3>
      <Toast></Toast>
      <br />
      <h3>Breadcrumb</h3>
      <Breadcrumb paths={["쇼핑하기", "TEST", "Breadcrumb"]}></Breadcrumb>
    </div>
  );
}

export default App;
