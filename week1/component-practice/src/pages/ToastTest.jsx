import Toast from "../components/Toast";
import React, { useState } from "react";

export default function ToastTest() {
  const [isShow, setIsShow] = useState(false);
  const [type, setType] = useState(0);

  const typeObj = {
    0: "success",
    1: "error",
    2: "warning",
    3: "info",
  };

  const guide = {
    0: "Click me!",
    1: "Click again",
    2: "Check the next type",
    3: "This is the last one",
  };

  const handleClick = () => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
      setType((type + 1) % 4);
    }, 2000);
  };

  return (
    <>
      <div>
        <p className="toast-guide" onClick={handleClick}>
          {guide[type]}
        </p>
        {isShow && <Toast message="Toooooast 😃" type={typeObj[type]}></Toast>}
        <p>{typeObj[type]}</p>
      </div>
    </>
  );
}
