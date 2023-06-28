import { useState } from "react";
import Toast from "./components/Toast";

type Type = "success" | "error" | "warning";

type ToastData = {
  id: number;
  type: Type;
  message: string;
};

function App() {
  const [toastList, setToastList] = useState<ToastData[]>([]);

  const onClick = (type: Type, message: string) => {
    setToastList((prev) =>
      prev.concat({
        id: Date.now(),
        type,
        message,
      })
    );
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
