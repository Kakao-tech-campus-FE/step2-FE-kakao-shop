import React, { useReducer } from "react";
import Toast from "../components/Toast/Toast";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [toast, setToast] = useReducer((prev) => !prev, false);

  return (
    <>
      <Button text="Test Toast" handleClick={setToast} />
      <Toast isShow={toast} text="Kakao Tech Campus!" handleToast={setToast} />
      <Button
        text="Test Breadcrumb"
        handleClick={() => navigate("/products")}
      />
    </>
  );
}
