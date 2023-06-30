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
      />
    </div>
  );
};
export default ToastGroup;
