import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import BHome from "./BHome";

export default function BPage1({ onClick }) {
  const breads = [
    { id: 0, url: "/b-home", name: "BreadHome", component: <BHome /> },
    { id: 1, url: "/b-home/b-page1", name: "Page1", component: <BPage1 /> },
  ];
  return (
    <>
      <Breadcrumbs paths={breads} onClick={onClick} />
      <p>현재 페이지: page1</p>
    </>
  );
}
