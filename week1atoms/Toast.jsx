import { useState, useEffect } from "react";
import "../style/Toast_style.css";
// TS == ToastStatus

export default function App() {
    const [TS, setTS] = useState(false);
    const Toast_Button = () => {
      setTS(true);
    };
    useEffect(() => {
      if (TS) {
        setTimeout(() => setTS(false), 3000);
      }}, [TS]);
    return (
        <div className="App">

        <div className="wrap"><button onClick={Toast_Button}>이건 뭘까?</button></div> 
        {TS && <div className="toast">{"이건 토스트야, 차례대로 아래는 라디오 버튼, 체크박스, 캐러셀, 토글, 브래드크럼이야"}</div>}

        </div>
    );
  }