import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <Button
      text="Detail Page"
      handleClick={() => navigate("/products/productDetail")}
    />
  );
}
