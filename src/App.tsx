import { useState } from "react";
import Toast from "./components/Toast";
import Carousel from "@components/Carousel";
import CheckList from "@components/CheckList";

type ToastData = {
  id: number;
  type: "success" | "error" | "warning";
  message: string;
};

function App() {
  const [toastList, setToastList] = useState<ToastData[]>([]);

  const onClick = (type: "success" | "error" | "warning", message: string) => {
    setToastList((prev) =>
      prev.concat({
        id: Date.now(),
        type,
        message,
      })
    );
  };

  return (
    <div>
      <Toast toastList={toastList} setToastList={setToastList} />
      <button onClick={() => onClick("success", "This is a success toast.")}>
        Success 토스트
      </button>
      <button onClick={() => onClick("error", "This is an error toast.")}>
        Error 토스트
      </button>
      <button onClick={() => onClick("warning", "This is a warning toast.")}>
        Warning 토스트
      </button>
      <CheckList />
      <Carousel />
    </div>
  );
}

export default App;
