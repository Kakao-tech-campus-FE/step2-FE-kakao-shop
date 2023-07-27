import { Slide, toast } from "react-toastify";
import Toast from "../components/molecules/Common/Toast";

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
  closeButton: false,
  transition: Slide,
  hideProgressBar: true,
  style: {
    padding: "12px 30px",
    backgroundColor: "#333333",
  },
};

export default function useToasts() {
  const showToast = (text, button) => {
    toast(<Toast text={text} button={button} />, toastOptions);
  };

  return { showToast };
}
