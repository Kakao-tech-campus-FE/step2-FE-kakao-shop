// 3초 안에 다시 장바구니에 담는 경우를 고려하여 상태를 2개 사용함

// package
import { useState } from "react";

// css
import "../styles/Toast.css";

// image
import cart_white from "../assets/images/icon/cart_white.png";

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(-1);

  function handleClick() {
    setVisible(true);
    if (timeoutId !== -1) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setVisible(false);
      }, 3000)
    );
  }

  return (
    <>
      <button className="toast-button" onClick={handleClick}>
        <img src={cart_white} alt="장바구니" />
      </button>
      {visible && (
        <div className="toast-div">
          <span className="toast-span">장바구니에 상품이 담겼습니다.</span>
          <a className="toast-a" href="http://localhost:3000/">
            바로가기
          </a>
        </div>
      )}
    </>
  );
}
