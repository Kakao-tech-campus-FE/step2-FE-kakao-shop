/**
 *
 * @param children the content of the alert
 * @param isOpen whether the alert is open or not
 * @param onClose the function to close the alert
 * @returns {JSX.Element|null}
 * @constructor
 */
import { RxCross2 } from "react-icons/rx";

const Alert = ({
  className = "",
  message = "경고창입니다.",
  buttonText = "확인",
  onClickButton,
  isOpen = false,
  onClose = () => {
    isOpen = false;
  },
}) => {
  if (!isOpen) return null;
  return (
    <div className={`static flex h-full w-full justify-center`}>
      <div className="alert-box fixed top-40 z-10 flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-white p-4">
        <RxCross2
          className={"absolute right-2 top-2 cursor-pointer text-2xl"}
          onClick={onClose}
        />
        <div className={"alert-contents p-4"}>{message}</div>
        <botton
          className={
            "cursor-pointer rounded-lg bg-kakao-dark-gray px-4 py-1 text-white"
          }
          onClick={onClickButton}
        >
          {buttonText}
        </botton>
      </div>
    </div>
  );
};

export default Alert;
