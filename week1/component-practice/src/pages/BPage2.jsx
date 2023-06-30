import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import BHome from "./BHome";
import BPage1 from "./BPage1";

export default function BPage2({ onClick }) {
  const breads = [
    { id: 0, url: "/b-home", name: "BreadHome", component: <BHome /> },
    { id: 1, url: "/b-home/b-page1", name: "Page1", component: <BPage1 /> },
    {
      id: 2,
      url: "/b-home/b-page1/b-page2",
      name: "Page2",
      component: <BPage2 />,
    },
  ];
  return (
    <>
      <Breadcrumbs paths={breads} onClick={onClick} />
      <p>현재 페이지: page2, 마지막 페이지입니다.</p>
    </>
  );
}
