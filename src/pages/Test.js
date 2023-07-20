import React from "react";

import Toast from "components/tests/Toast.js";
import Breadcrumb from "components/tests/Breadcrumb.js";
import Carousel from "components/tests/Carousel.js";
import RadioList from "components/tests/RadioList.js";
import ToggleButton from "components/tests/ToggleButton.js";
import CheckList from "components/tests/CheckList.js";

import carouselImage1 from "assets/carousel/carouselItem1.jpeg";
import carouselImage2 from "assets/carousel/carouselItem2.jpeg";
import carouselImage3 from "assets/carousel/carouselItem3.jpeg";

export default function Test() {
  return (
    <>
      <h1>JsH 쇼핑하기</h1>
      <h2>TEST Page</h2>
      <h3>[Toast]</h3>
      <Toast />
      <br />
      <h3>[Breadcrumb]</h3>
      <Breadcrumb paths={["쇼핑하기", "TEST", "Breadcrumb"]} />
      <br />
      <h3>[Carousel]</h3>
      <Carousel images={[carouselImage1, carouselImage2, carouselImage3]} />
      <br />
      <h3>[RadioList]</h3>
      <RadioList items={["옵션1", "옵션2", "옵션3"]} />
      <br />
      <h3>[ToggleButton]</h3>
      <ToggleButton />
      <br />
      <h3>[CheckList]</h3>
      <CheckList items={["옵션1", "옵션2", "옵션3"]} />
      <br />
    </>
  );
}
