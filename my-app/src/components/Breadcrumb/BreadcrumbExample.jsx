import React from "react";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

export default function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>카카오 테크 캠퍼스</BreadcrumbItem>
      <BreadcrumbItem>2단계</BreadcrumbItem>
      <BreadcrumbItem>1주차 과제</BreadcrumbItem>
    </Breadcrumb>
  );
}
