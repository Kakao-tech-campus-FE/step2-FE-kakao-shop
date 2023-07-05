import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const mainCarouselImages = [
  "https://st.kakaocdn.net/thumb/C1920x300/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fmain_top_banner_pc%2F20230628164610_6c0ddb94182e498ca2bb5d193958790f.png",
  "https://st.kakaocdn.net/thumb/C1920x300/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fmain_top_banner_pc%2F20230626155310_715504948680460081a13b594bb48c11.png",
  "https://st.kakaocdn.net/thumb/C1920x300/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fmain_top_banner_pc%2F20230627100109_736dbd9a323a4409b5db269cd071c385.png",
];
const mainCarouselTexts = [
  {
    title: "Apple 신제품 런칭기념",
    context: `사전예약 시작
    맥북에어 15 M2`,
  },
  { title: "", context: "" },
  {
    title: "글루타치온/콜라겐/유산균 외",
    context: `여에스더 여름 맞이 
    ~61% 빅세일`,
  },
];

const breadcrumbLinks = ["Home", "Products", "Category", "Product Name"];

function Subpage() {
  return (
    <div>
      <h1>Carousel</h1>
      <Carousel images={mainCarouselImages} texts={mainCarouselTexts} />
      <h1>Breadcrumb</h1>
      <Breadcrumb links={breadcrumbLinks} />
    </div>
  );
}

export default Subpage;
