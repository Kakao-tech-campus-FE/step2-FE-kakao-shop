import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Toast = ({ message, time, isShow, onClose }) => {
  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        onClose();
      }, time);
    }
  }, [isShow, onClose, time]);

  return (
    <div className={"toast-wrapper flex w-full justify-center"}>
      <div
        className={`toast font-size-xl fixed bottom-10 z-10 flex w-[50%] items-center justify-center rounded-xl bg-black bg-opacity-70 p-2 text-white
        ${
          isShow
            ? "show -translate-y-0 transform transition-all"
            : "hide duration-350 -translate-y-[-200%] transform transition-all ease-in-out"
        }
      `}
      >
        <button
          className="toast-close-button absolute right-2"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
