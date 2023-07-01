import React, { useState } from "react";
import Toast from "../components/Toast/Toast";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);

  const handleToastClick = () => {
    setToast((prev) => !prev);
  };
  return (
    <>
      <Button text="Test Toast" handleClick={handleToastClick} />
      <Toast
        isShow={toast}
        text="Kakao Tech Campus!"
        handleToast={handleToastClick}
      />
      <Button
        text="Test Breadcrumb"
        handleClick={() => navigate("/products")}
      />
    </>
  );
}
