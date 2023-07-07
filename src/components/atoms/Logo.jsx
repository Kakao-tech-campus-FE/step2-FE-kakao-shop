import React from "react";

/**
 * Atom 컴포넌트
 * @param src 로고 이미지 출처
 * @param alt 대체 텍스트
 * @param className
 * @returns img Tag
 */
export default function Logo({ src, alt, className = "" }) {
  return <img src={src} alt={alt} className={className} />;
}
