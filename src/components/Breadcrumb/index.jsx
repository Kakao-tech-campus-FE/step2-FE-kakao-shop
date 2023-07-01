import React, { useState } from "react";
import { Location, Category } from "./style";

const categories = {
  뷰티: ["스킨케어/메이크업", "향수/바디/헤어"],
  "스킨케어/메이크업": ["베이스메이크업", "기초화장품", "선케어"],
  "향수/바디/헤어": ["바디케어", "헤어스타일링", "향수"],
  베이스메이크업: [
    "컨실러",
    "메이크업베이스",
    "BB크림",
    "파운데이션",
    "쿠션팩트",
  ],
  기초화장품: ["스킨", "로션", "미스트", "크림", "에센스"],
  선케어: ["선로션", "선크림", "선스프레이", "에프터선", "태닝"],
  바디케어: [
    "바디 보습제",
    "바디 클렌져",
    "바디 파우더",
    "입욕제",
    "아로마테라피",
  ],
  헤어스타일링: [
    "헤어젤",
    "염색제",
    "헤어매니큐어",
    "헤어왁스",
    "헤어스프레이",
  ],
  향수: ["공용향수", "향수세트", "여성향수", "남성향수"],
  상품: [],
};

export default function Breadcrumb() {
  const [locations, setLocations] = useState(["뷰티"]);

  const handleCategoryClick = (e) => {
    setLocations((prevLocations) => [...prevLocations, e.target.innerText]);
  };

  const handleLocationClick = (e) => {
    setLocations((prevLocations) =>
      prevLocations.slice(0, prevLocations.indexOf(e.target.innerText) + 1)
    );
  };

  return (
    <>
      <Location>
        {locations.map((location) => (
          <span key={location} onClick={handleLocationClick}>
            {location}
          </span>
        ))}
      </Location>
      <Category>
        {categories[locations[locations.length - 1]]?.map((category) => (
          <p key={category} onClick={handleCategoryClick}>
            {category}
          </p>
        ))}
      </Category>
    </>
  );
}
