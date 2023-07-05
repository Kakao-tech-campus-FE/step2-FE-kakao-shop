import React from "react";

export default function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="mb-1">
      {children}
    </label>
  );
}
