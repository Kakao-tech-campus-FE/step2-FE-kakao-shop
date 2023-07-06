import { useState } from "react";
import Button from "../atoms/Button";
import "../../styles/Modal.css";

const Modal = ({ open, close, title, description }) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {title}
            <Button className="close" onClick={close}>
              &times;
            </Button>
          </header>
          <main>{description}</main>
          <footer>
            <Button className="close" onClick={close}>
              확인
            </Button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
