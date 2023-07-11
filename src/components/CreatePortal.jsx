import ReactDOM from "react-dom";

function CreatePortal({ children }) {
  const el = document.getElementById("portal");
  return ReactDOM.createPortal(children, el);
}

export default CreatePortal;
