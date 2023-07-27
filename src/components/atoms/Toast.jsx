import {useEffect} from "react";
import {RxCross2} from "react-icons/rx";

const Toast = ({message, time, isShow, onClose}) => {

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                onClose();
            }, time)
        }
    }, [isShow, onClose, time])

    return (
        <div className={"toast-wrapper w-full flex justify-center"}>
            <div className={`toast fixed flex w-[50%] z-10 justify-center items-center p-2 bg-black bg-opacity-70 text-white rounded-xl bottom-10 font-size-xl
${isShow ? "show transform -translate-y-0 transition-all" : "hide transform -translate-y-[-200%] transition-all duration-350 ease-in-out"}
      `}>
                <button className="toast-close-button absolute right-2" onClick={onClose}><RxCross2/></button>
                <div className="toast-message">{message}</div>
            </div>
        </div>
    );
}

export default Toast