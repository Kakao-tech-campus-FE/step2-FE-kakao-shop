import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import { Provider } from "jotai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
