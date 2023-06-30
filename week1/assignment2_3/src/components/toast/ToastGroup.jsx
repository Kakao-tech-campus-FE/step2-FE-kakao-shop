import { useState } from "react";
import Toast from "./Toast";

const ToastGroup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Toast!</button>
      {isVisible ? (
        <Toast setToast={setIsVisible} text={"This is Toast Message!!"} />
      ) : (
        false
      )}
    </div>
  );
};
export default ToastGroup;
