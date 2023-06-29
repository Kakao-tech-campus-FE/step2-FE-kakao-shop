import { useState } from "react";
import Toast from "@components/Toast";
import Carousel from "@components/Carousel";
import CheckList from "@components/CheckList";
import Toggle from "@components/Toggle";
import Radio from "@components/Radio";
import Breadcrumb from "@components/Breadcrumb";
import { Link } from "react-router-dom";

type ToastData = {
  id: number;
  type: "success" | "error" | "warning";
  message: string;
};

function Main() {
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
      <Breadcrumb color={"#3cb371"} />
      <div>
        <Link to="/detail">DetailPage</Link>//
        <Link to="/detail/order">OrderPage</Link>
      </div>
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
      <Toggle
        background={{
          offColor: "rgb(233, 233, 234)",
          onColor: "rgb(0, 200, 102)",
        }}
      />
      <Radio
        data={{ id: "1", value: "딸기", name: "fruits", text: "딸기" }}
        color={"#dc3545"}
      />
      <Radio
        data={{ id: "2", value: "포도", name: "fruits", text: "포도" }}
        color={"#dc3545"}
      />
      <Radio
        data={{ id: "3", value: "바나나", name: "fruits", text: "바나나" }}
        color={"#dc3545"}
      />
      <CheckList />
      <Carousel />
    </div>
  );
}

export default Main;
