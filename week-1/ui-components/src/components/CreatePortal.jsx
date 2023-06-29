import React from "react";
import ReactDOM from "react-dom";

function ModalPortal({ children }) {
  const el = document.getElementById("portal");
  return ReactDOM.createPortal(children, el);
}

export default ModalPortal;
