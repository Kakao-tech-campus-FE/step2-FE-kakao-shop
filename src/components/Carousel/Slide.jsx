import React from "react";

export default function Slide({ src, alt }) {
  return (
    // 이미지를 가로로 나타내기 위해 <ol> 태그를 flexbox로 설정하니
    // 내부의 li 요소가 줄어들어서 shrink-0을 주어서 해결
    <li className="shrink-0 w-full">
      <img className="" src={src} alt={alt} loading="lazy" decoding="async" />
    </li>
  );
}
