import React from "react";

/**
 * Atom 컴포넌트
 * @param children
 * @param className
 * @returns div Tag
 */
export default function Text({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
