import React, { useState } from "react";
import Toast from "./components/Toast";

function App() {
  const [toast, setToast] = useState(false);

  return (
    <div className="App">
      {toast && <Toast setToast={setToast} />}
      <button
        onClick={() => {
          setToast(true);
        }}
      >
        토스트
      </button>
    </div>
  );
}

export default App;
