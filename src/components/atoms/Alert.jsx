/**
 *
 * @param children the content of the alert
 * @param isOpen whether the alert is open or not
 * @param onClose the function to close the alert
 * @returns {JSX.Element|null}
 * @constructor
 */
import {RxCross2} from "react-icons/rx";

const Alert = ({
                   className = "",
                   message = "경고창입니다.",
                   buttonText = "확인",
                   onClickButton,
                   isOpen = false,
                   onClose = () => {isOpen = false;}
               }) => {
    if (!isOpen) return null;
    return (
        <div className={`w-full h-full static flex justify-center`}>
            <div
                className="alert-box bg-white fixed top-40 p-4 z-10 rounded-lg flex flex-col justify-center items-center border border-gray-300">
                <RxCross2 className={"text-2xl cursor-pointer absolute right-2 top-2"} onClick={onClose}/>
                <div className={"alert-contents p-4"}>
                    로그인이 필요합니다.
                </div>
                <botton className={"bg-kakao-dark-gray rounded-lg py-1 px-4 text-white cursor-pointer"}
                        onClick={onClickButton}>
                    {buttonText}
                </botton>
            </div>
        </div>
    );
}

export default Alert;