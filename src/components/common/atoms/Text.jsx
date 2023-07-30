import React from "react";

/**
 * Atom 컴포넌트
 * @param children
 * @param className
 * @returns p Tag
 */
export default function Text({ children, className = "" }) {
  return <p className={className}>{children}</p>;
}
