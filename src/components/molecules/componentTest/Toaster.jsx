import React, { useState, useEffect } from "react";

const Toast = ({ toastKey, theme, duration, position, remove }) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        const updatedTime = prev - 0.01;
        return parseFloat(updatedTime.toFixed(2));
      });
    }, 10);
      return () => {
        clearInterval(timer);
      };
  }, []);

  const styleObj = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "beige",
      color: "black",
    },
  };
  
  const positionObj = {
    left: {
      left: "0",
    },
    right: {
      left: "calc(100% - 250px)",
    },
    center: {
      margin: "0 auto",
    },
  };
  
  return (
    <div // 토스트 전체 div
      key={toastKey}
      style={{
        ...styleObj[theme],
        ...positionObj[position],
        position: "relative",
        bottom: "0",
        display: "block",
        width: "250px",
        height: "60px",
        textAlign: "center",
        border: "1px solid lightblue",
        marginBottom: "5px"
      }}
    >
      <p style={{ // 메시지
        margin: "auto", 
        lineHeight: "60px"
      }}>
        {duration}초 지속되는 {theme === "light" ? "라이트" : "다크"} 토스트 입니다.
      </p>

      <button // 토스트 삭제 버튼
      style={{
        position:"absolute",
        right:"0",
        top:"0",
      }}
      onClick={() => remove()
      }>삭제</button>

      <div // 남은 시간 보여주는 바
        style={{
          width: `${(remainingTime / duration) * 100}%`,
          height: "10%",
          position: "absolute",
          bottom: "0",
          background: "green",
        }}
      >
      </div>
    </div>
  );
};

const Toaster = () => {
  const [theme, setTheme] = useState("light");
  const [position, setPosition] = useState("right");
  const [toasts, setToasts] = useState([]);

  const toastRemainingTime = 5; // 토스트 지속시간 (sec)

  //새로운 토스트 생성
  const handleCreateToast = () => {
    const newToast = {
      id: Date.now(),
      theme: theme,
      position: position,
    };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      removeToast(newToast.id);
    }, toastRemainingTime * 1000);
  };
  
  // 토스트 삭제
  const removeToast = (toastId) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  return (
    <div style={{ position: "relative" }}>
      <h1>Toast</h1>
      <button onClick={() => setTheme("dark")}>다크 모드</button>
      <button onClick={() => setTheme("light")}>라이트 모드</button>
      <br />
      <button onClick={() => setPosition("left")}>왼쪽</button>
      <button onClick={() => setPosition("center")}>가운데</button>
      <button onClick={() => setPosition("right")}>오른쪽</button>
      <br />
      <button onClick={handleCreateToast}>토스트 생성</button>
      <div
        style={{
          zIndex: "1",
          width: "100%",
          position: "fixed",
          bottom: "0",
        }}
      >
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            theme={toast.theme}
            duration={toastRemainingTime}
            position={toast.position}
            remove={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Toaster;