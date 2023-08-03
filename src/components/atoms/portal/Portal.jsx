import ReactDOM from "react-dom";

function Portal({ children }) {
  const el = document.getElementById("portal");
  return ReactDOM.createPortal(children, el);
}

export default Portal;
