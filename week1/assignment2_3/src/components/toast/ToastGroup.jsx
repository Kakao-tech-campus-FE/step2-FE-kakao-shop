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
      <Toast
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        text={"This is Toast Message!!"}
        color="#0A6EBD"
      />
    </div>
  );
};
export default ToastGroup;
