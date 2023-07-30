import React from "react";

/**
 * 제목 컴포넌트(atoms)
 * @param {string} children children
 * @param {string} className className
 * @returns h1 Tag
 */
export default function Title({ children, className = "" }) {
  return <h1 className={className}>{children}</h1>;
}
