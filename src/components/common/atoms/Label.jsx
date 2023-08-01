import React from "react";

/**
 * Atom 컴포넌트
 * @param htmlFor input의 id와 연결
 * @param children
 * @param className
 * @returns label Tag
 */
export default function Label({ htmlFor, children, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
